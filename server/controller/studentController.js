const student = require("../model/studentModel")
const studentClassId = require("../model/studentClassModel")

exports.studentcreate = async(req,res)=>{
    if(!(req.body.studentName || req.body.registrationNo || req.body.email || req.body.gender || req.body.studentClass || req.body.dob)) return res.status(400).json({error:"data not properly formatted"})
    
    const {studentName,registrationNo,email,gender,studentClass,dob} = req.body

    try {
        const studentExist = await student.exists({registrationNo,email})
        if(studentExist) return res.status(409).json({error:"email or registration number already exist"})

        const createStudent = await student.create({
            studentName,
            registrationNo,
            email,
            gender,
            classId:studentClass,
            dob
        })

        const updateStudentClass = await studentClassId.findById(studentClass)
        updateStudentClass.studentId.push(createStudent._id)
        const updatedStudentClass = updateStudentClass.save()

        res.json(createStudent)

    } catch (error) {
        res.json({error: error.message})
    }
}

exports.getStudent = async(req,res)=>{
    try {
        const getallstudent = await student.find().populate('classId')
        res.json(getallstudent)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getOneStudent = async(req,res)=>{
    const {studentId} = req.params 

    try {
        const getOneStudent = await student.findById(studentId)
        res.json(getOneStudent)
    } catch (error) {
        res.json({error:error.message})
    }
}

exports.updateStudent = async(req,res)=>{

    const {studentId} = req.params 
    const {studentName,registrationNo,email,gender,studentClass,dob} = req.body

    try {
        
    const existStudent = await student.findOne({_id:studentId})

    if(existStudent.classId !== studentClass){
        
        const pullStudentFromClass = await studentClassId.findOneAndUpdate(
            {studentId: studentId},
            {$pull: {studentId:studentId}}
        )

        const pushStudentInClass = await studentClassId.findOneAndUpdate(
            {_id: studentClass},
            {$push: {studentId:studentId}}
        )
    }

    const updateStudent = await student.updateOne(
        {_id: studentId},
        {$set: {
            studentName,
            registrationNo,
            email,
            gender,
            dob,
            classId:studentClass,
        }}
    )

    res.json(updateStudent)

    } catch (error) {
        res.json({error:error.message})
    }
    
}