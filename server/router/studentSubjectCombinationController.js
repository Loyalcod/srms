const express = require("express")
const { deleteClass } = require("../controller/studentClassController")
const router = express.Router()

const {
    createCombo, 
    getCombo,
    getOneCombo,
    toggoleStatus,
    delcombo
} = require('../controller/studentsubjectcomboController')


/* ------------------------------------------------ creating student subject combination ------------------------------------------------ */
router.post('/regCombo',createCombo)

/* ------------------------------------------------- get all student subject combination ------------------------------------------------ */
router.get('/getcombo',getCombo)

/* ------------------------------------------------ get one studeent subject combination ------------------------------------------------ */
router.get('/:comboId',getOneCombo)

/* --------------------------------------------- toggole status student subject combination --------------------------------------------- */
router.get('/toggol/:comboId',toggoleStatus)

/* ------------------------------------------------- delete student subject combination ------------------------------------------------- */
router.delete('/deletein/:studentId/:subjectId/:comboId',delcombo)


module.exports = router