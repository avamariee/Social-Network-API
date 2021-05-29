// starting code
const router = require('express').Router();


const {
    getAllUser, getUserById, createUser, updateUser, deleteUser, friendlistAdd
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
    .put(updateUser)
    .delete(deleteUser)

// friends routeseeeeeeeeeeeeeeeeee
// /api/users/:userId/friends/:friendId
router
    .route('/:id/friends/:friendsId')
    .post(friendlistAdd)


module.exports = router;