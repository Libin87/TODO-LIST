
var express = require('express');
const cors = require('cors');

const app = express();
const todoRoute = express.Router();


const todo = [
    {
        todo_description: 'first todo',
        todo_responsible: 'favas',
        todo_priority: 'Medium',
        todo_completed: false
    },
    {
        todo_description: 'second todo',
        todo_responsible: 'faheem',
        todo_priority: 'Low',
        todo_completed: false
    },
]

function updateAgeByName(todo, todo_description, newData) {
    for (var i = 0; i < todo.length; i++) {
      if (todo[i].todo_description === todo_description) {
        todo[i].todo_responsible = newData.todo_responsible;
        todo[i].todo_completed = newData.todo_completed;
        todo[i].todo_priority = newData.todo_priority;
        break; // Exit the loop if the object is found
      }
    }
  }

//middlewares
app.use(cors());
app.use(express.json() );
app.use('/todos',todoRoute)

todoRoute.route('/').get((req,res)=>{
    res.json(todo)
})

todoRoute.route('/:id').get((req,res)=>{
    const val = todo.find((element)=>{
        return element.todo_description===req.params.id
    })
    res.json(val);
})

todoRoute.route('/add').post((req,res)=>{
    todo.push(req.body)
    res.json('data added')
})

todoRoute.route('/update/:id').post((req,res)=>{
    const getId = req.params.id;
    updateAgeByName(todo,getId,req.body);
    res.send('updated succesfully')
})

app.listen(
    3001,
    ()=>{console.log('server started');}
)