const express=require('express');
const router=express.Router();
const User=require('../models/User');
const { body, validationResult } = require('express-validator');

//Create a user using :POST " /api/auth/". doesnt require auth
router.post('/',[body('name',"Enter a valid name").isLength({min:3}),body('email',"Enter a valid email").isEmail(),body('password', "Enter a password at least of 5 characters").isLength({ min: 5 }),
], (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
      }).then(user => res.json(user));
    // res.send(req.body);
})
module.exports=router 