const result = require("../model/resultModel")
const student = require('../model/studentModel')
const subject = require("../model/subjectModel")


exports.registerResult = async(req,res)=>{
    if(!(req.body.studentId || req.body.subjectId || req.body.classId || req.body.mark)) return res.status(400).json({error:"data not properly formatted"})
    const {studentId,subjectId,classId,mark} = req.body

    try {
        const resultAlreadyExist = await result.exists({studentId,subjectId,classId})
        if(resultAlreadyExist) return res.status(403).json({error:"result already exist"})

        const createResult = await result.create({
            studentId,
            subjectId,
            classId,
            mark
        })

        const pushResultInStudent = await student.findOneAndUpdate(
            {_id: studentId},
            {$push: {resultId: createResult._id}}
        )

        const pushResultInSubject = await subject.findOneAndUpdate(
            {_id: subjectId},
            {$push: {resultId:createResult._id}}
        )

        res.json(createResult)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getResult = async(req,res)=>{
    try {
        const resultget = await result.find()
        .populate('studentId').populate('subjectId').populate('classId')

        res.json(resultget)

    } catch (error) {
        res.json({error:error.message})
    }
}