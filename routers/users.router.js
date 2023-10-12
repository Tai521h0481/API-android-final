const express = require('express');
const usersRouter = express.Router();
require('dotenv').config();

const {Users} = require('../models');
const {uploadImg} = require('../middlewares/upload/uploadImage');
const {isCreated, isExistId, validateInput, isExistEmail} = require('../middlewares/validation/validation');
const { createUser,
        login,
        updatePremium,
        changePassword,
        updateUser,
        uploadImage } = require('../controllers/users.controller');

// create Account 
usersRouter.post('/register', validateInput(['email', 'password', 'username', 'almaMater']), isCreated(Users), createUser);
// login
usersRouter.post('/login', validateInput(['username', 'password']), login);
// update to premium
usersRouter.put('/updatePremium/:userId', isExistId(Users), updatePremium);
// change password
usersRouter.put('/changePassword/:userId', validateInput(['originPassword', 'newPassword']), isExistId(Users), changePassword);
// update user
usersRouter.put('/:userId', isExistId(Users), updateUser);
// upload profile image
usersRouter.post('/uploadImage', uploadImg.single('avatars'), uploadImage);

module.exports = usersRouter;