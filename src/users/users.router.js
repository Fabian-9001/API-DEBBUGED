const usersServices = require('./users.services')
const router = require('express').Router()


router.get('/users', usersServices.getAllUsers)
router.post('/users', usersServices.postUser)
router.get('/users/:id', usersServices.getUserById)
router.patch('/users/:id', usersServices.patchUser)
router.delete('/users/:id', usersServices.deleteUser)

module.exports = router