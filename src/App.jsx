import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import starImg from './assets/icon-star.svg'
import Question from './components/Question'

function App() {

  return (
    <div className="main-container">
      <div className="faq-container">
        <div className="heading-container">
          <img src={starImg} alt="" />
          <h1>FAQs</h1>
        </div>
        <div className="all-questions-container">
            <Question question="What is Frontend Mentor, and how will it help me?" answer="Frontend Mentor offers realistic coding challenges to help developers improve their 
              frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
              all levels and ideal for portfolio building." />
            <Question question="Is Frontend Mentor free?" answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
              option providing access to a range of projects suitable for all skill levels." />
            <Question question="Can I use Frontend Mentor projects in my portfolio?" answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
              way to showcase your skills to potential employers!" />
            <Question question="How can I get help if I'm stuck on a challenge?" answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help 
              channel where you can ask questions and seek support from other community members." />
        </div>
      </div>
    </div>

  )
}

export default App
