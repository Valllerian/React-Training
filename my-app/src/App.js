import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'School meeting',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
])

  const appName = 'Task Tracker';
  // const x = true;
  return (
    // can only have one parent element;
    <div className="container">
     <h1> {appName}!</h1>
     {/* <h2> So, {x ? 'Yes' : 'No'}. It`s is me. </h2>
     <Header title='How are you?'/> */}
     <Header/> 
     <Tasks tasks = {tasks}/> 
    </div>
  );
}

export default App;


// return (
//   // can only have one parent element;
//   <div className="container">
//    <h1> Hey there! My hane is {name}!</h1>
//    <h2> So, {x ? 'Yes' : 'No'}. It`s is me. </h2>
//    <Header title='How are you?'/>
//   </div>
// );