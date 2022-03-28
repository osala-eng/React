import { useState } from "react" ;
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Newtask from "./components/Newtask";

function App() {
  const [showTaskpane, setShowtaskpane] = useState(false)
  const [tasks, setTask] = useState([
    {
        id: 1,
        text: 'Doctors appointment',
        day: 'Feb 5 at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'School meeting',
        day: 'Feb 5 at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Shopping',
        day: 'Feb 5 at 3:30pm',
        reminder: false,
    }
])
//add tasks
const newTask = (task)=>{
  const id = Math.floor(Math.random() * 10000) + 1

  const _newTask = {id, ...task}
  setTask([...tasks, _newTask])
}
//Delete task
const deleteTask = (id) =>{
  setTask(tasks.filter((task)=> task.id !== id))
}
//Toggle reminder
const toggleReminder = (id)=>{
  setTask(
    tasks.map((task)=> 
    task.id === id?{
      ...task, reminder: !task.reminder
    }: task
    )
  )
}

  return (
    <div className="container">
      <Header onNew={()=>setShowtaskpane(!showTaskpane)}/>
      {showTaskpane && <Newtask onAdd={newTask}/>}
      {tasks.length > 0?(<Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder}
      />):(
        'No Tasks to Display'
      )}
    </div>
  );
}

export default App;
