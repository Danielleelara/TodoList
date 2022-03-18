import React, { useEffect } from 'react'
import styles from './App.module.css';
import { useState } from 'react';
import Tasks from './Components/Tasks';

function App() {
  const [tasks, setTasks] = useState();

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));

  })

  console.log(tasks)


  return (
    <>
    <div className={styles.container}>
      <Tasks tasks={tasks}/>
    </div>
    </>
  )
}

export default App;
