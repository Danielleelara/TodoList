import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import styles from "./Home.module.css";
import {v4 as uuidv4} from 'uuid';
import AddTask from '../Components/AddTask';
import { CgClose } from 'react-icons/cg';


function Tasks() {

  const { id } = useParams();
    const[tasks, setTasks] = useState([]);
    
    useEffect(() => {
        async function getTasks() {
          const response = await api.get(`/users/${id}/todos`);
          setTasks(response.data);
        }
        getTasks();
      }, [id]);

      const handleTaskClick = (taskId) => {
        const newTasks = tasks.map((task) => {
          if(task.id === taskId)return {...task, completed: !task.completed }
    
          return task;
        })
        setTasks(newTasks);
      }

      
      const handleTaskAddition = (taskTitle) =>{
        const newTasks = [...tasks, {
          title: taskTitle,
          id: uuidv4(),
          completed: false
        }]
        setTasks(newTasks);
      }

      const handleTaskDeletion = (taskId) =>{
        const newTasks = tasks.filter(task => task.id !== taskId)
        setTasks(newTasks);
      }

  return (
    <>
    
        <button class="btn-outline-secondary" type="button" onClick={()=>{window.history.back()}}>Voltar</button>
          
        <div className={styles.container}>
        <h1>Tarefas</h1>
        
        <AddTask 
          handleTaskAddition={handleTaskAddition}
          handleTaskClick={handleTaskClick} 
          handleTaskDeletion={handleTaskDeletion}
        />

        <ul className={styles.lista}>
          {tasks.map((task) => {
            return (
              <ul key={task.id}>
                <li>{task.title}</li>
                <button 
                   className={styles.removeTaskButton}
                    onClick={() => handleTaskDeletion(task.id)}
                    
                >
                    <CgClose />  
                </button>
              </ul>
            );
          })}
        </ul> 
      </div>
    </>
  )
}

export default Tasks;