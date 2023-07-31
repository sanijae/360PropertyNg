const { getAllContact ,getContact,addContact,deleteContact ,updateContact} = require('../Controllers/ContactController')

const router = require('express').Router()

router.get('/',getAllContact)
router.post('/add',addContact)
router.get('/:id',getContact)
router.put('/update/:id',updateContact)
router.delete('/delete/:id',deleteContact)

module.exports = router