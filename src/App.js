import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";
import { useState } from "react";

const App = () => {
	const [showAddTask, setShowAddTask] = useState(true)

	const tasksData = [
		{
		  id: 1,
		  text: 'Doctors Appointment',
		  day: 'Dec 01 2022',
		  reminder: true,
		},
		{
		  id: 2,
		  text: 'Doctors Appointment 2',
		  day: 'Dec 02 2022',
		  reminder: false,
		},
	];
	const [tasks, setTasks] = useState(tasksData)

	// Delete Task
	const deleteTask = (id) => {
		console.log('delete ', id);
		//.filter used to not show the id in the array
		setTasks(tasks.filter((task) => task.id !== id))
	}

	// Toogle Reminder
	const toggleReminder = (id) => {
		console.log('toggleReminder ', id);
		setTasks(
			tasks.map((task) => 
				task.id === id ? 
				{ ...task, reminder: !task.reminder } : task
			)
		)
	}

	//Add Task
	const AddTasks = (task) => {
		console.log('task', task);
		const id = Math.floor(Math.random() * 10000 + 1)
		const newTask = { id, ...task }
		setTasks([...tasks, newTask])
	}

	return (
		<div className="container">
			<Header 
				title='Task Tracker' 
				onAdd={() => setShowAddTask(!showAddTask)}
				showAdd={showAddTask}
			/>
			{
				showAddTask === true ? <AddTask onAdd={AddTasks} /> : ''
			}
			
			{
				tasks.length > 0 ? 
				<Tasks 
					tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to show'
			}
			
		</div>
	);
}

export default App;
