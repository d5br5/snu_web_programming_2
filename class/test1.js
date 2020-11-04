/* eslint-disable keyword-spacing */
/* eslint-disable spaced-comment */
/* eslint-disable space-before-blocks */

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://owner:owner@cluster0.hmtm5.mongodb.net/Cluster0?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true});
const Cat = mongoose.model('Cat', { name: String });
const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

const Task = mongoose.model('Task', 
{ 
    title: String,
    description: String,
    dueDate: String 
},
);

const tasks = [];

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/tasks', async (req, res) => {
    const tasks= await Task.find();
    res.send(JSON.stringify(tasks));
});

//tasks/1 => 0번째 task를 가져오는 함수
app.get('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task =await Task.findById(id);

  if(!task){
    return res.sendStatus(404);
  }
  res.send(task);
});

//title, description dueDate
app.post('/tasks/', async (req, res) => {
  const {title, description, dueDate} = req.body;
  const task = new Task({title, description, dueDate});
  await task.save();
  tasks.push(task);

  res.send(tasks);
});

// ?author=kim&page=1
app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task =tasks[id-1];

  if(!task) {
    return res.sendStatus(404);
  }

  const {title, description, dueDate} = req.body;
  task.title=title;
  task.description=description;
  task.dueDate=dueDate;

  res.send(task);
});

app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task =tasks[id-1];

  if(!task) {
    return res.sendStatus(404);
  }

  tasks.splice(id-1, 1);
  res.sendStatus(200);
});

app.listen(3000);
