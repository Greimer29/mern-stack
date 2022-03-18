const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({ message: [] });
notesCtrl.createNote = (req, res) => res.json({ message: "Note created" });
notesCtrl.updateNote = (req, res) => res.json({ message: "Note updated" });
notesCtrl.deleteNote = (req, res) => res.json({ message: "Note deleted" });
notesCtrl.getNote = (req, res) => res.json({ title: "Cosas que hacer" });


module.exports = notesCtrl;