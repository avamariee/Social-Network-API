const User = require('../models/User'); console.log(User)



const userController = {


    // functions here to use as methods for api requests


    // GET all users

    getAllUser(req, res) {
        User.find({})
            // .populate({
            //     path: 'thoughts',
            //     select: '-__v'
            // })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log("There was an error. GET ALL USERS" + err);
                res.status(400).json(err)
            });
    },

    // GET a single user by its _id and populated thought and friend data

    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            // .populate({
            //     path: 'thoughts',
            //     select: '-__v'
            // })
            .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'There is no User with this ID.' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log('There was an error. FIND ONE USER ' + err);
                res.status(400).json(err);
            });
    },

    // POST a new user

    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },
}





// PUT - update a user by its _id


// DELETE - remove a user by its _id


// remove a user's associated thoughts when deleted


module.exports = userController;