const express = require('express');
const app = express();

const UserModel = require('../model/users');

app.use(express.urlencoded({extended: false}));

async function handelGetAllUsers(req, res) {
    const allUsers = await UserModel.find({});
    return res.json(allUsers);
}

async function handelGetSingleUser(req, res) {
    const userDetails = await UserModel.findById(req.params.id);
    if(!userDetails) return res.status(400).json({error:'User not found!'});
    return res.status(200).json(userDetails);
}

async function handelDeleteUser(req, res) {
    const userDetails = await UserModel.findByIdAndDelete(req.params.id);
    if(!userDetails) return res.status(400).json({error:'User not found!'});
    return res.status(200).json({msg: 'User deleted successfully.'});
}

async function handelPatchUser(req, res) {
    const userDetails = await UserModel.findByIdAndUpdate(req.params.id, req.body);
    if(!userDetails) return res.status(400).json({error:'User not found!'});
    return res.status(200).json({msg: 'User updated successfully.'});
}

async function handelCreateNewUser(req, res) {
    const userDetails = await UserModel.create(req.body);
    console.log('userDetails::', userDetails);
    if(!userDetails) return res.status(400).json({error:'User not created!', msg: userDetails});
    return res.status(200).json(userDetails);
}

module.exports = {
    handelGetAllUsers,
    handelGetSingleUser,
    handelDeleteUser,
    handelPatchUser,
    handelCreateNewUser
}