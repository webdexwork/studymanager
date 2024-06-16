import styles from './Clock.module.css'

import ClockImg from '../../assets/pic2.svg'
import arrow from '../../assets/arrow.png'

import { useState, useRef, useEffect } from 'react'

const Clock = () => {

    const [seconds, setSeconds] = useState(3600)
    const [startTimer, setStartTimer] = useState(false)
    const timerId = useRef(null)

    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const totalSeconds = remainingSeconds % 60;

    const handleStartTimer = () => {
        setStartTimer(!startTimer)
    }
    const handleStopTimer = () => {
        setStartTimer(false)
    }

    const handleResetTimer = () => {
        setSeconds(0)
        setStartTimer(false)
    }

    useEffect(() => {
        if (startTimer) {
            timerId.current = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1)
            }, 1000)
        } 

        return () => {
            clearInterval(timerId.current)
        }
    }, [startTimer])

    useEffect(() => {
        if (seconds === 0) {
            handleStopTimer()
        }
    })

    const handleIncrement = () => {
        setSeconds(seconds + 600)
    }

    const handleDecrement = () => {
        setSeconds(prevSeconds => Math.max(0, prevSeconds - 600));
    }

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(totalSeconds).padStart(2, '0')}`;

    return (
        <main className={styles.ClockMain}>
            <section className={styles.left}>
                <h1>Opiskelukello⏲️</h1>
                <div className={styles.timer}>
                    <h2>Ajasta opiskelusi!</h2>
                    <div className={styles.time}>
                        <h1>{formattedTime}</h1>  
                        <div className={styles.buttons}>
                            <button onClick={handleIncrement}><img className={styles.increment} src={arrow} alt="" /></button>
                            <button onClick={handleDecrement}><img className={styles.decrement} src={arrow} alt="" /></button>
                        </div>  
                    </div>
                    <div className={styles.buttons2}>
                        <button className={styles.startStop} onClick={handleStartTimer}>Start/Stop</button>
                        <button className={styles.reset} onClick={handleResetTimer}>Reset</button>
                    </div>
                    <h2>Pidä tauko, kun aika päättyy🫶🏻</h2>
                </div>
            </section>
            <section className={styles.right}>
                <img src={ClockImg} alt="" />
            </section>
        </main>
    )
}

export default Clock