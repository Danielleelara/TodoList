import React, { useState } from 'react';
import styles from './AddTask.module.css'
import Button from './Button';

const AddTask = ({handleTaskAddition, handleTaskClick}) => {
    const[inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleAddTaskClick = (newTasks) => {
        handleTaskAddition(inputData)
        setInputData('')
    }

    return ( 
        <div className={styles.addTaskContainer}>
            <input 
                placeholder="Insira uma tarefa" 
                onChange={handleInputChange} 
                value= {inputData}
                className={styles.addTaskInput} 
                type="text" /> 
            <div className={styles.addTaskButtonContainer}>
            <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
           
        </div>    
    );
}


export default AddTask;