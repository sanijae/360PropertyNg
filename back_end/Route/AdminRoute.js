const { getAdmins, registerAdmin, getAdmin, updateAdmin, deleteAdmin, updatePassword, loginAdmin } = require('../Controllers/AdminController')

const router = require('express').Router()

router.get('/',getAdmins)
router.post('/add',registerAdmin)
router.post('/login',loginAdmin)
router.get('/:id',getAdmin)
router.put('/update/:id',updateAdmin)
router.put('/updatePassword/:id',updatePassword)
router.delete('/delete/:id',deleteAdmin)

module.exports = router
