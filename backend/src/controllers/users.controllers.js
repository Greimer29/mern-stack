const usersCtrl = {};

usersCtrl.getUsers = (req, res) => res.json({ message: [] });
usersCtrl.createUser = (req, res) => res.json({ message: "User created" });
usersCtrl.deleteUser = (req, res) => res.json({ message: "User deleted" });

module.exports = usersCtrl;