import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import styles from "./Tasks.module.css";
import { v4 as uuidv4 } from "uuid";
import AddTask from "../Components/AddTask";
import { CgTrash, CgCheck } from "react-icons/cg";

function Tasks() {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getTasks() {
      const response = await api.get(`/users/${id}/todos`);
      setTasks(response.data);
    }
    getTasks();
  }, [id]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskAddition = async (taskTitle) => {
    const newTask = {
      completed: false,
      id: uuidv4(),
      title: taskTitle,
    };

    try {
      await addTask(newTask);
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
    } catch (error) {
      console.log("Deu ruim papai");
    }
  };

  const addTask = async (task) => {
    const response = await api.post(`/users/${id}/todos`, { task });
    console.log(response);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <>
      <button
        className={styles.goBackButton}
        type="button"
        onClick={() => {
          window.history.back();
        }}
      >
        Voltar
      </button>

      <div className={styles.container}>
        <h1>Tarefas</h1>

        <AddTask
          handleTaskAddition={handleTaskAddition}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />

        <ul className={styles.addTaskInput}>
          {tasks.map((task) => {
            return (
              <>
                <li
                  className={styles.task}
                  key={task.id}
                  style={
                    task.completed
                      ? {
                          backgroundColor: "rgb(226, 220, 231)",
                          textDecoration: "line-through",
                        }
                      : {}
                  }
                >
                  {task.title}
                  <div className={styles.actions}>
                    <button
                      className={`${styles.taskButton} ${styles.taskButtonSuccess}`}
                      onClick={() => handleTaskClick(task.id)}
                    >
                      <CgCheck size={16} color="white" />
                    </button>
                    <button
                      className={`${styles.taskButton} ${styles.taskButtonDelete}`}
                      onClick={(event) => {
                        event.stopPropagation();
                        return handleTaskDeletion(task.id);
                      }}
                    >
                      <CgTrash size={16} color="white" />
                    </button>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Tasks;
