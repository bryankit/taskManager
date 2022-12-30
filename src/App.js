import Header from "./components/Header";
import Tasks from './components/Tasks';
import { useState } from "react";

const App = () => {
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
		// console.log('toggleReminder ', id);
		setTasks(
			tasks.map((task) => 
				task.id === id ? 
				{ ...task, reminder: !task.reminder } : task
			)
		)
	}

	return (
		<div className="container">
			<Header title='Task Tracker' />
			{
				tasks.length > 0 ? 
				<Tasks 
					tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to show'
			}
			
		</div>
	);
}

export default App;
