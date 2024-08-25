const express = require('express');
const router = express.Router();

const { 
    handelGetAllUsers,
    handelGetSingleUser,
    handelCreateNewUser,
    handelPatchUser,
    handelDeleteUser
 } = require('../controller/users_controller');

router.route('/')
    .get(handelGetAllUsers)
    .post(handelCreateNewUser);

router.route('/:id') 
    .get(handelGetSingleUser)
    .patch(handelPatchUser)
    .delete(handelDeleteUser);

module.exports = router;
