import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App=()=> {
  const [showAddTask, setShowAddTask ]=useState(false)

  const [ tasks , setTasks ] = useState(
    [{
    id: 1,
    text: 'Doctors Appointment',
    date: 'Feb 6th at 1:30pm',
    reminder: true,
},
{
    id: 2,
    text: 'Football practise',
    date: 'Feb 6th at 5:30pm',
    reminder: true,
},
{
    id: 3,
    text: 'Meeting at School',
    date: 'Feb 7th at 11:00pm',
    reminder: true,
}])
const addTask=(task)=>{
   const id=Math.floor(Math.random()*1000)+1
   const newTask={id,...task}
   setTasks([...tasks,newTask])
}

const deleteTask= (id) =>{
    setTasks(tasks.filter((task) => task.id !==id ))
   
}

const toggleReminder=(id)=>{
  setTasks(tasks.map((task) => task.id === id ? { ...task,reminder: !task.reminder}: task))
}

  return (
    <div className="container ">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? ( <Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle={toggleReminder}/>) : ('No Tasks to Show')}
    </div>
  );
}
  
export default App;
