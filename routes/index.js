const { Router } = require('express')
const router = Router()
const {createContact, getAll, deleteContact, updateContact, findContact} = require("../controllers/houseController.js")

router.get('/contacts', getAll)

router.post('/createContact', createContact)

router.delete('/deleteContact', deleteContact)

router.put('/updateContact', updateContact)

router.get('/find', findContact)

module.exports = router