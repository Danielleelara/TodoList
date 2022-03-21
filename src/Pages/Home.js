import { useState, useEffect } from "react";
import api from "../api";
import Users from "../Components/Users";
import styles from "./Home.module.css"

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
      async function getTasks() {
        const response = await api.get("users");
        setUsers(response.data)
      }
        getTasks()
      }, []);


  return (
    <>
    <div className={styles.container}>
        <h1>Usuários</h1>
        <Users className={styles.users} users={users}/>    
    </div>
    </>
  )
}
