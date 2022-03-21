import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import styles from "./Home.module.css";
import {v4 as uuidv4} from 'uuid';
import AddTask from '../Components/AddTask';


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

      
      const handleTaskAddition = (taskTitle) =>{
        const newTasks = [...tasks, {
          title: taskTitle,
          id: uuidv4(),
          completed: false
        }]
        setTasks(newTasks);
      }

  return (
    <>
    
        <button class="btn-outline-secondary" type="button" onClick={()=>{window.history.back()}}>Voltar</button>
          
        <div className={styles.container}>
        <h1 className="titulo">Tarefas</h1>
        
        <AddTask handleTaskAddition={handleTaskAddition} />

        <ul className="lista">
          {tasks.map((task) => {
            return (
              <ul key={task.id}>
                <li>{task.title}</li>
              </ul>
            );
          })}
        </ul> 
      </div>
    </>
  )
}

export default Tasks;