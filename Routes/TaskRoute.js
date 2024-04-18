
const {AddTask,GetTask,EditDone,Delete,GetSingleTask,EditTask,EditDoneFalse} =require('../Controllers/TaskController')
const TaskRouter=require('express').Router()

TaskRouter.post('/add',AddTask)
TaskRouter.get('/',GetTask)
TaskRouter.put('/done/:id',EditDone)
TaskRouter.put('/done/reverse/:id',EditDoneFalse)
TaskRouter.put('/title/:id',EditTask)
TaskRouter.delete('/:id',Delete)
TaskRouter.get('/:id',GetSingleTask)

module.exports=TaskRouter