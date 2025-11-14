import express from 'express';
import { getToDoListByEvent, addTask, deleteTask, updateTask } from '../controllers/toDoController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/:eventId', verifyToken, getToDoListByEvent);    // Get ToDo list for event

router.post('/add-task', verifyToken, addTask);              // Add task
router.post('/delete-task', verifyToken, deleteTask);        // Delete task
router.post('/update-task', verifyToken, updateTask);        // Update task

export default router;
