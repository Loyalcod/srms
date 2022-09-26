const studentSubjectCombination = require("../model/studentSubjectComboModel")
const student = require('../model/studentModel')
const subject = require('../model/subjectModel')



exports.createCombo = async(req,res)=>{
    const {studentId,subjectId} = req.body

    try {

        const checkifSubStdExist = await student.findById(studentId)
        if(checkifSubStdExist.subjectId.includes(subjectId)){
            return res.status(409).json({error:"already exist"})
        }

        const putSbjInStudent = await student.findOneAndUpdate(
            {_id: studentId},
            {$push: {subjectId:subjectId}}
        )

        const putStdInSbj = await subject.findOneAndUpdate(
            {_id: subjectId},
            {$push: {studentId:studentId}}
        )

        const createCombo = await studentSubjectCombination.create({
            studentId,
            subjectId
        })

        res.json(createCombo)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getCombo = async(req,res)=>{
    try {
        const getAllCombo = await studentSubjectCombination.find()
        .populate('studentId').populate('subjectId')

        res.json(getAllCombo)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getOneCombo = async(req,res)=>{
    const {comboId} = req.params 

    try {
        const getOnecombo = await studentSubjectCombination.findById({_id: comboId})
        .populate({
            path: 'studentId',
            populate:{
                path: 'classId'
            }
        }).populate('subjectId')

        res.json(getOnecombo)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.toggoleStatus = async(req,res)=>{
    const {comboId} = req.params 

    try {
        const toggolstatus = await studentSubjectCombination.findById(comboId).select('status')
        var realStatus = toggolstatus.status

        realStatus === true ? realStatus = false: realStatus = true

        const toggolit = await studentSubjectCombination.updateOne(
            {_id: comboId},
            {$set: {status: realStatus}}
        )
        res.json(toggolit)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.delcombo = async(req,res)=>{
    const {comboId,studentId,subjectId} = req.params

    try {
        const removeSubFromStudent = await student.findOneAndUpdate(
            {_id: studentId},
            {$pull: {subjectId:subjectId}}
        )

        const removeStudentFromSubject = await subject.findOneAndUpdate(
            {_id: subjectId},
            {$pull: {studentId:studentId}}
        )

        const delCombo = await studentSubjectCombination.deleteOne({_id: comboId})
        res.json(delCombo)

    } catch (error) {
        res.json({error:error.message})
    }
}