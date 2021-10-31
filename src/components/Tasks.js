import Task from './Task'

const Tasks = ({tasksCustomAttribute, onDelete}) => {
    return (
        <>
            {tasksCustomAttribute.map((task) => (
                <Task key={task.id} taskIndividual={task} onDelete={onDelete} />
            ))}
        </>
    )
}

export default Tasks
