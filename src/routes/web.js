const express = require('express');
const router = express.Router();

const { getAllTask, CreateTask, DeleteTask } = require('../controllers/taskController');

router.get('/', getAllTask)

router.post('/create', CreateTask)
router.post('/delete/:id', DeleteTask);

module.exports = router;