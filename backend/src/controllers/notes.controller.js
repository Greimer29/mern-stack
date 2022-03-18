const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async(req, res) => {
    const notes = await Note.find();
    res.json(notes)
};

notesCtrl.createNote = async(req, res) => {
    const { title, description, author, date } = req.body;
    const newNote = new Note({
        title,
        description,
        author,
        date
    });
    await newNote.save();
    res.json({ message: "Note created" });
}

notesCtrl.updateNote = async(req, res) => {
    const { title, description, author, date } = req.body;
    await Note.findByIdAndUpdate({ _id: req.params.id }, {
        title,
        description,
        author,
        date
    });
    res.json({ message: "Note updated" });
}
notesCtrl.deleteNote = async(req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
}
notesCtrl.getNote = async(req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
}

module.exports = notesCtrl;