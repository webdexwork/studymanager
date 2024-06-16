import styles from './Quote.module.css';

import axios from 'axios';
import { useState, useEffect } from 'react';

import QuoteImg from '../../assets/pic3.svg'

const Quote = () => {

    const teachers = [
        "Pasi Ahtola", "Hannu Sinisalo", "Tomi Anttila", "Antti Moilanen",
        "Saara Taajoranta", "Elina Luoma-Aho", "Mari Rauhala", "Reetta Paananen",
        "Minna Saarinen", "Elina Lappi", "Ilkka Männikkö", "Heikki Liuska", "Jarkko Vilkkilä",
        "Hristo Popov", "Emilia Rautiainen"
    ];

    const [teacher, setTeacher] = useState('')

    useEffect(() => {
        setTeacher(teachers[Math.floor(Math.random() * teachers.length)])
    })

    

    const [quote, setQuote] = useState('');

    axios.get('https://api.adviceslip.com/advice')
        .then((res) => {
           setQuote(res.data.slip.advice)
        })
        .catch((err) => {
            setQuote('Quotea ei saatu näpistettyä API:sta :(')
        })

    return (
        <main className={styles.QuoteMain}>
            <section className={styles.left}>
                <h1>Päivän quote📜</h1>
                <h2><i>"{quote}"</i></h2>
                <p>-{teacher}</p>
            </section>
            <section className={styles.right}>
                <img src={QuoteImg} alt="" />
            </section>
        </main>
    )
}

export default Quote