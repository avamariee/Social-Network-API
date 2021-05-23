const Thought = require('../models/Thought')
const User = require('../models/User')

const thoughtController = {
    // get all thoughts

    getThoughts(req, res){
        Thought.find({})
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log("There was an error. " + err);
            res.status(400).json(err)
        });
    },

    // get a single thought by its _id

    // post to create a new thought, push to associated user's thoughts array field

    // put to update a thought by its _id

    // delete to remove a thought by its _id

    // post to create a reaction store in single thought's reactions array

    // delete to pull and remove a reaction by the reaction's reactionID field
}

module.exports = thoughtController