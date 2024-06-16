import './App.css';

//Hook Import
import { useRef } from 'react';

//Component imports
import Tasks from './Components/Tasks/Tasks';
import Clock from './Components/Clock/Clock';
import Quote from './Components/Quote/Quote';

//Img imports
import arrowImg from './assets/arrow.png';


function App() {

  const tasksRef = useRef(null)
  const clockRef = useRef(null)
  const quoteRef = useRef(null)

  function scrollToSection(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav>
        <a onClick = {() => scrollToSection(tasksRef)}>Tänään tehtävänä</a>
        <a onClick = {() => scrollToSection(clockRef)}>Opiskelukello</a>
        <a onClick = {() => scrollToSection(quoteRef)}>Päivän quote</a>        
      </nav>

      <img className='ScrollToTop' onClick={() => scrollToSection(tasksRef)} src={arrowImg} alt="" width={30}/>

      <section ref={tasksRef}><Tasks/></section>
      <section ref={clockRef}><Clock/></section>
      <section ref={quoteRef}><Quote/></section>

      <footer>
        <h4>I ❤️ ReactJS</h4>
      </footer>
      
    </>
  )
}

export default App
