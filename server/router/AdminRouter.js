const express = require("express")
const router = express.Router()

const {
    registerAdmin,
    loginAdmin,
    refreshLoginAdmin,
    logoutAdmin
} = require('../controller/AdminController')


/* -------------------------------------------------------- register admin router ------------------------------------------------------- */
router.post('/register',registerAdmin)

/* --------------------------------------------------------- login admin router --------------------------------------------------------- */
router.post('/login',loginAdmin)

/* ------------------------------------------------------ refresh login admin router ----------------------------------------------------- */
router.get('/refresh',refreshLoginAdmin)

/* --------------------------------------------------------- logout admin router -------------------------------------------------------- */
router.get('/logout',logoutAdmin)

module.exports = router