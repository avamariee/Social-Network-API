// starting code
const router = require('express').Router();


const {
    getAllUser, getUserById, createUser
} = require('../../controllers/user-controller')

// GET and POST requests for localhost:3001/api/users
router
.route('/')
.get(getAllUser)
.post(createUser);


// GET ONE, PUT & DELETE for localhost:3001/api/users/:id

router
.route('/:id')
.get(getUserById)

module.exports = router;