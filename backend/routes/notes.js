const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Notes");
const { body, validationResult } = require("express-validator");

// ROUTE 3// Get all the notes "/api/auth/getuser". login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {

    try {
        const notes = await Note.find({ user: req.user.id });
  res.json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("some error occured");
      }
  
});

// ROUTE 3// add a new note  "/api/auth/addnote". login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "description must be atleast 5 chracters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
      try {
        const { title, description, tag } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        // If there are errors , return Bad requests and the errors
    
        const note = new Note({ title, description, tag, user: req.user.id });
        const savedNote = await note.save();
        res.json(savedNote);
      } catch (error){
        console.log(error.message);
        res.status(500).send("some error occured");
      }

  }
);
module.exports = router;
