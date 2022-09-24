const express = require("express")
const router = express.Router()

const {
    registerAdmin,
    loginAdmin
} = require('../controller/AdminController')


/* -------------------------------------------------------- register admin router ------------------------------------------------------- */
router.post('/register',registerAdmin)

/* --------------------------------------------------------- login admin router --------------------------------------------------------- */
router.post('/login',loginAdmin)




module.exports = router