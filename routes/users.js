const express = require('express');
const User = require('../modal/User');
const router = express.Router();


// register
router.post('/register', async (req, res) => {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    }
    console.log(user);
    try {
        await User.create(user);
        res.status(201).json({
            message: "Dang ky thanh cong.",
            email: user.email
        });

    } catch (e) {
        console.log(e)
        res.send("error")
    }
});
// login

router.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({ email: email });
        if (!user) {
            res.send("khong tim thay email !");
        } else {
            if (password == user.password) {
                res.send({
                    user
                });
            }else {
                res.send("Sai mat khau")
            }
        }
    } catch (error) {

    }
});

module.exports = router;