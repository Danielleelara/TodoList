import { useState, useEffect } from "react";
import api from "../api";
import Tasks from "../Components/Tasks";
import styles from "./Home.module.css"

export default function Home() {
    const [tasks, setTasks] = useState();

    useEffect(()=>{
      async function getTasks() {
        const response = await api.get("posts");
        setTasks(response.data)
      }
        getTasks()
      }, []);

  return (
    <>
    <div className={styles.container}>
      <Tasks tasks={tasks}/>
    </div>
    </>
  )
}
