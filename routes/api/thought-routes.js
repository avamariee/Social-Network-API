// starting code
const router = require('express').Router();

const {
    getThoughts, getThoughtsById, createThought, updateThought, deleteThought, createReaction, removeReaction
} = require('../../controllers/thought-controller');

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

    // /api/thoughts/:thoughtId/reactions
    
router
    .route('/api/thoughts/:thoughtId/reactions')
    .put(createReaction)
    .delete(removeReaction);

module.exports = router;