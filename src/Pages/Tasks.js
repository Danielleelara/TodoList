import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';


function Tasks({user}) {

  const { id } = useParams();
    const[tasks, setTasks] = useState([]);
    
    useEffect(() => {
        async function getTasks() {
          const response = await api.get(`/users/${id}/todos`);
          setTasks(response.data);
        }
        getTasks();
      }, [id]);
      console.log('tasks', tasks)
  return (
       
    <div>
    <h1 className="titulo">Tarefas</h1>

     <ul className="lista">
      {tasks.map((task) => {
        return (
          <p key={task.id}>
            <p>{task.title}</p>
          </p>
        );
      })}
    </ul> 
  </div>
  )
}

export default Tasks;