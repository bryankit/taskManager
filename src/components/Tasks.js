const tasks = [
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

const Tasks = () => {
	return (
		<div>
			{tasks.map((task) => (
				<h3>{task.text}</h3>
			))}
		</div>
	)
}

export default Tasks;
