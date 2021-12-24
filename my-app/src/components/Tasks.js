import { useState } from 'react'

const Tasks = () => {
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

    return (
        <div>
        {tasks.map((task) => (<h3 key = {task.id}>{task.text}</h3>))}    
        </div>
    )
}

export default Tasks
