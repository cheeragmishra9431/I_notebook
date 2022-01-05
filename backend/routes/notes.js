const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Notes");
const { body, validationResult } = require("express-validator");

// ROUTE 1// Get all the notes "/api/notes/getuser". login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {

    try {
        const notes = await Note.find({ user: req.user.id });
  res.json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("some error occured");
      }
  
});

// ROUTE 3// add a new note  "/api/notes/addnote". login required
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
// ROUTE 3// Update an existing note  "/api/notes/update/:id". login required    PUT request used note it.
router.put(
    "/update/:id",
    fetchuser,async (req, res) => {
        const {title, description, tag}=req.body;
        try {
            //Create a new object
            const newNote={};
            if(title){newNote.title=title};
            if(description){newNote.description=description};
            if(tag){newNote.tag=tag};
            //find the node to be updated
            var note=await Note.findById(req.params.id); // remember to var not note as reassigning will happen later
            if(!note){
                return res.status(404).send("Not found")
            }
            if(note.user.toString()!=req.user.id){
                return res.status(401).send("Not allowed")
    
            }
            note=await Note.findByIdAndUpdate(req.params.id, {$set:newNote}, {new:true})
            res.json({note});
            
        } catch (error) {
            console.log(error.message);
            res.status(500).send("some error occured");
          }
    });
// ROUTE 3// Update an existing note  "/api/notes/deletenote/:id". login required    delete request used note it.
router.delete(
    "/deletenote/:id",
    fetchuser,async (req, res) => {
        // const {title, description, tag}=req.body;
        try {
            
            //find the node to be deleted
            var note=await Note.findById(req.params.id); // remember to var not note as reassigning will happen later
            if(!note){
                return res.status(404).send("Not found")
            }
            //allow deletion only if user owns this note
            if(note.user.toString()!=req.user.id){
                return res.status(401).send("Not allowed")
    
            }
            note=await Note.findByIdAndDelete(req.params.id)
            res.json({"Succes": "Note has been deleted"});
        } catch (error) {
            console.log(error.message);
            res.status(500).send("some error occured");
          }
        
        
    });

module.exports = router;
