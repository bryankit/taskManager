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
	return (
		<div className="container">
			<Header title='Task Tracker' />
			<Tasks tasks={tasks}/>
		</div>
	);
}

export default App;
