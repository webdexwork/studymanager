//Component imports
import styles from './Tasks.module.css';
import TaskImg from '../../assets/pic1.svg';
import CheckImg from '../../assets/check.png';

import { useState, useEffect } from 'react';

const Tasks = () => {

    //Maximum tasks able to set
    const maxTasks = 4;
    //UseState for tasks
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewtask] = useState('');

    const [secretMessage, setSecretMessage] = useState('')

    useEffect(() => {
        if (tasks[0] === 'P' && tasks[1] === 'R' && tasks[2] === 'K') {
            setSecretMessage('Nettisivun on kehittänyt Pasin Ritarikunta')
        }
    })

    //Capturing the input
    function handleInputChange(event) {
        setNewtask(event.target.value)
    }

    //adding new task, if there are less than 5 tasks
    function addTask() {
        if (newTask.trim() !== '' && tasks.length < maxTasks) {
            setTasks(t => [...t, newTask]);
            setNewtask('');
        }
    }

    //deleting task
    function deleteTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }

    //Jsx of the component
    return (
        <main className={styles.TasksMain}>
            <section className={styles.left}>
                <div className={styles.TaskSection}>
                    <p>{secretMessage}</p>
                    <h1>Tänään tehtävänä✍🏼</h1>
                    <div className={styles.AddTask}>
                        <input 
                            type="text" 
                            placeholder="Seuraavaksi🚀" 
                            value={newTask}
                            onChange={handleInputChange}
                        />
                        <button onClick = {addTask}>+</button>
                    </div>
                    <hr />
                    <ol>
                        {tasks.map((task, index) => (
                            <li key={index}>
                                <span className={styles.text}>{task}</span>
                                <button className={styles.done} onClick={() => deleteTask(index)}><img src={CheckImg} alt=""/></button>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
            <section className={styles.right}>
                <img src={TaskImg} alt="" />  
            </section>
        </main>
    )
}

export default Tasks