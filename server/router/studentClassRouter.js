const express = require("express")
const router = express.Router()

const {
    createStudentClass,
    getClass,
    getOneClass,
    updateClass,
    deleteClass
} = require('../controller/studentClassController')

/* ----------------------------------------------------- create student class router ---------------------------------------------------- */
router.post('/studentClass',createStudentClass)

/* ---------------------------------------------------------- get class router ---------------------------------------------------------- */
router.get('/getClass',getClass)

/* -------------------------------------------------------- get one class router -------------------------------------------------------- */
router.get('/:classId',getOneClass)

/* ----------------------------------------------------- update student class router ---------------------------------------------------- */
router.patch('/:classId',updateClass)

/* --------------------------------------------------------- delete class router -------------------------------------------------------- */
router.delete('/:classId',deleteClass)

module.exports = router