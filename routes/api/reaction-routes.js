// starting code
const router = require('express').Router();

const {
   createReaction, removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/:thoughtId/reactions

router
    .route('/:thoughtId/reactions')
    .post(createReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);


module.exports = router;