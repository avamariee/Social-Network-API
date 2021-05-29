// starting code
const router = require('express').Router();

const {
    getThoughts, getThoughtsById, createThought, updateThought, deleteThought, createReaction, removeReaction
} = require('../../controllers/thought-controller');
const { friendlistAdd } = require('../../controllers/user-controller');

// GET and POST requests for localhost:3001/api/thoughts
router
    .route('/')
    .get(getThoughts)
    .post(createThought);

// GET ONE, PUT & DELETE for localhost:3001/api/thoughts/:id

router
    .route('/:id')
    .get(getThoughtsById)
    .put(updateThought)
    .delete(deleteThought);


module.exports = router;