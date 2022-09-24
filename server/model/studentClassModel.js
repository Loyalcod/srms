const mongoose = require("mongoose")


const studentClassSchema = mongoose.Schema({
    className: {
        type: String,
        required: true
    },
    Section: {
        type: String,
        required: true
    },

    studentId: [{type: mongoose.Types.ObjectId, ref:"student"}]

},{timestamps: true})

module.exports = mongoose.model('classes',studentClassSchema)

