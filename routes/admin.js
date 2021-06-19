const express = require('express');
const Admin = require('../modal/Admin');
const router = express.Router();

//get admin
router.get("/",async(req,res)=>{
    const admin=await Admin.find({});
    return res.status(200).json({ admin })
})
router.get("/:adminID",async(req,res)=>{
    const{adminID}=req.params;
    const admin=await Admin.findById(adminID);
    const adminValue={
        _id: admin._id,
        firstName: admin.firstName,
        lastName: admin.lastName,
        type: admin.type
    }
    return res.status(200).json({ adminValue })
})
// register
router.post('/register', async (req, res) => {
    const admin = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        account: req.body.account,
        password: req.body.password,
        type:'admin'
    }
    console.log(admin);
    try {
        await Admin.create(admin);
        res.status(201).json({
            message: "Dang ky thanh cong.",
            account: req.body.account
        });

    } catch (e) {
        console.log(e)
        res.send("error")
    }
});
router.post('/login', async (req, res) => {
    try {
        const account = req.body.account;
        const password = req.body.password;
        const admin = await Admin.findOne({ account: account });
        if (!admin) {
            // res.send("khong tim thay email !");
            return res.status(404).json({
                message: "sai tài khoản.",
            })
        } else {
            if (password == admin.password) {
                const adminValue={
                    _id: admin._id,
                    firstName: admin.firstName,
                    lastName: admin.lastName,
                    type: admin.type
                }
                res.send({
                    adminValue
                });
            }else {
                // res.send("Sai mat khau");
                return res.status(404).json({
                    message: "Sai mật khẩu.",
                })
            }
        }
    } catch (error) {

    }
});

module.exports = router;