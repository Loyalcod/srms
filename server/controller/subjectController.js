const subject = require("../model/subjectModel")



exports.registerSubject = async(req,res)=>{
    if(!(req.body.subjectName || req.body.subjectCode)) return res.status(400).json({error:"data not properly formatted"})
    const {subjectName,subjectCode} = req.body

    try {
        const subjectExist = await subject.exists({$or: [{subjectName},{subjectCode}]})
        if(subjectExist) return res.status(403).json({error: "subject already exist"})

        const newSubject = new subject({
            subjectName,
            subjectCode
        })

        const saveSubject = newSubject.save()
        res.json(newSubject)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getSubject = async(req,res)=>{
    try {
        const getAllSubject = await subject.find()
        res.json(getAllSubject)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getOneSbj = async(req,res)=>{
    const {subjectId} = req.params

    try {
        const getOneSubject = await subject.findById(subjectId)
        res.json(getOneSubject)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.updateOneSubject = async(req,res)=>{
    const {subjectId} = req.params 

    const subjectName = req.body.subjectName !== ''? req.body.subjectName : subject.subjectName
    const subjectCode = req.body.subjectCode !== '' ? req.body.subjectCode : subject.subjectCode

    try {
        const updateOneSbj = await subject.updateOne(
            {_id: subjectId},
            {$set: {subjectName,subjectCode}}
        )
        res.json(updateOneSbj)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.deleteSbj = async(req,res)=>{
    const {subjectId} = req.params

    try {
        const deleteOneSubject = await subject.deleteOne(
            {_id: subjectId}
        )
        res.json(deleteOneSubject)
        
    } catch (error) {
        res.json({error: error.message})
    }
}