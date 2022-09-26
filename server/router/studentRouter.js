const express = require("express")
const router = express.Router()


const {
    studentcreate,
    getStudent,
    getOneStudent,
    updateStudent,
    deleteStudent
} = require("../controller/studentController")


/* -------------------------------------------------------- student create router ------------------------------------------------------- */
router.post('/student',studentcreate)

/* --------------------------------------------------------- get student router --------------------------------------------------------- */
router.get('/getStudent',getStudent)

/* ------------------------------------------------------- get one student router ------------------------------------------------------- */
router.get('/:studentId',getOneStudent)

/* -------------------------------------------------------- update student router ------------------------------------------------------- */
router.patch('/:studentId',updateStudent)

/* -------------------------------------------------------- delete student router ------------------------------------------------------- */
router.delete("/:classId/:studentId",deleteStudent)



module.exports = router