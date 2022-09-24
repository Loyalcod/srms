const express = require("express")
const router = express.Router()

const {registerAdmin} = require('../controller/AdminController')


/* -------------------------------------------------------- register admin router ------------------------------------------------------- */
router.post('/register',registerAdmin)




module.exports = router