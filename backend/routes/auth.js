const express=require('express');
const router=express.Router();
const User=require('../models/User');
const { body, validationResult } = require('express-validator');



//Create a user using :POST " /api/auth/". doesnt require auth. No login reequired
router.post('/createuser',[body('name',"Enter a valid name").isLength({min:3}),body('email',"Enter a valid email").isEmail(),body('password', "Enter a password at least of 5 characters").isLength({ min: 5 }),
],async (req, res)=>{


  // If there are errors , return Bad requests and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    // check whether the user exists already
    try{
      let user=await User.findOne({email:req.body.email});
    // console.log(user);
    if(user){
      return res.status(400).json({error: "Sorry a user with this email alreadt exists"})
    }
    user= await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
      })
      res.json({user});
    }catch(error){
      console.log(error.message);
      res.status(500).send("some error occured");
    }


    


      // .then(user => res.json(user))
      // .catch(err=>console.log(err))
      // res.json({error:'please enter unique value for email', message:err.message})
    // res.send(req.body);
})
module.exports=router 