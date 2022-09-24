const studentClass = require("../model/studentClassModel")


exports.createStudentClass = async(req,res)=>{
    if(!(req.body.className || req.body.Section)) return res.status(409).send({error:"data not properly formmatted"})
    const {className,Section} = req.body

    try {

        const classExist = await studentClass.exists({$or: [{className},{Section}]})
        if(classExist) return res.status(409).json({error:"class already exist"})
        const createClass = await studentClass.create({
            className,
            Section
        })
        res.json(createClass)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getClass = async(req,res)=>{
    try {

        const getClass = await studentClass.find()
        res.json(getClass)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getOneClass = async(req,res)=>{
    const {classId} = req.params 

    try {
        const oneClass = await studentClass.findById(classId)
        res.json(oneClass)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.updateClass = async(req,res)=>{

    const {classId} = req.params

    const className = req.body.className == ''? studentClass.className : req.body.className
    const Section = req.body.Section == ''? studentClass.Section : req.body.Section

    try {

        const updateClass = await studentClass.updateOne(
            {_id: classId},
            {$set: {className,Section}}
        )

        res.json(updateClass)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.deleteClass = async(req,res)=>{
    const {classId}=req.params

    try {
        const deleteClass = await studentClass.deleteOne({_id:classId})
        res.json(deleteClass)
        
    } catch (error) {
        res.json({error:error.message})
    }
}

