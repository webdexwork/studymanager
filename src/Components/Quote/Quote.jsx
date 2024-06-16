import styles from './Quote.module.css';

import QuoteImg from '../../assets/pic3.svg'

const Quote = () => {
    return (
        <main className={styles.QuoteMain}>
            <section className={styles.left}></section>
            <section className={styles.right}>
                <img src={QuoteImg} alt="" />
            </section>
        </main>
    )
}

export default Quote