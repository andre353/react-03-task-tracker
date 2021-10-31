import { FaTimes } from 'react-icons/fa'

const Task = ({taskIndividual, onDelete}) => {
    return (
        <div className="task">
            <h3>{taskIndividual.text}<FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(taskIndividual.id)} /></h3>
            <p>{taskIndividual.day}</p>
        </div>
    )
}

export default Task
