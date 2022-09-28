const express = require("express")
const router = express.Router()

const {
    registerAdmin,
    loginAdmin,
    refreshLoginAdmin,
    logoutAdmin
} = require('../controller/AdminController')

const VerifyAuthentication = require('../middleware/AuthMiddleWare')

/* -------------------------------------------------------- register admin router ------------------------------------------------------- */
router.post('/register',registerAdmin)

/* --------------------------------------------------------- login admin router --------------------------------------------------------- */
router.post('/login',loginAdmin)

/* ------------------------------------------------------ refresh login admin router ----------------------------------------------------- */
router.get('/refresh',refreshLoginAdmin)

/* --------------------------------------------------------- logout admin router -------------------------------------------------------- */
router.get('/logout',VerifyAuthentication,logoutAdmin)

module.exports = router