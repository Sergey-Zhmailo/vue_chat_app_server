const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');
const userService = require('../services/users');

router.get('/', authMiddleware, async (req, res) => {
    res.status(200).send(`Email: ${req.locals.email}`);
});

router.post('/', authMiddleware, async (req, res) => {
    try {
        const newUser = {
            email: req.locals.email,
            ...req.body
        };

        const user = await userService.createUser(newUser);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userService.getUser(id);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});
module.exports = router;
