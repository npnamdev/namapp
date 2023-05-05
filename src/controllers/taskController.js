const Task = require("../models/task");

module.exports = {
    getAllTask: async (req, res) => {
        let results = await Task.find({});
        res.render('home.ejs', { listTask: results });
    },
    CreateTask: async (req, res) => {
        await Task.create({ message: req.body.message });
        res.redirect('/');
    },
    DeleteTask: async (req, res) => {
        await Task.deleteOne({ _id: req.body.id })
        res.redirect('/');
    }
}