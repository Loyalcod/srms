const student = require("../model/studentModel")
const subject = require('../model/subjectModel')
const result = require('../model/resultModel')
const studentClass = require('../model/studentClassModel')


exports.totalcount = async(req,res)=>{
    try {
        const totalStudent = await student.count()
        const totalSubject = await subject.count()
        const totalresult = await result.count()
        const totalStudentClass = await studentClass.count()
       

        res.json({
            totalStudent,
            totalSubject,
            totalresult,
            totalStudentClass,
            
        })

    } catch (error) {
        res.json({error:error.message})
    }
}