import { Router } from 'express';
import { renderTasks, createTask, renderTasksEdit, eidtTask, deleteTask, taskToggleDone } from '../controllers/tasks.controller';

const router = Router();

router.get('/',renderTasks);

router.post('/tasks/add', createTask)

router.get('/edit/:id', renderTasksEdit);

router.post('/edit/:id', eidtTask)

router.get('/delete/:id', deleteTask)

router.get('/toggleDone/:id', taskToggleDone)

router.get('/about', (req, res) => {
    //res.send('Abaut')
    res.render('about')
});

export default router;