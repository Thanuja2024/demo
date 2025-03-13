const express = require('express');
const UserController = require('../controllers/userController');

const setUserRoutes = (app) => {
    const userController = new UserController();

    app.post('/users', userController.createUser.bind(userController));
    app.get('/users', userController.getUsers.bind(userController));
    app.put('/users/:id', userController.updateUser.bind(userController));
    app.delete('/users/:id', userController.deleteUser.bind(userController));
};

module.exports = setUserRoutes;