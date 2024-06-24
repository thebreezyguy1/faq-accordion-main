import React, { useState } from "react";
import addImg from "../assets/icon-plus.svg"
import minusImg from "../assets/icon-minus.svg";

const Question = (props) => {
    const [active, setActive] = useState(false)

    const handleQuestion = () => {
        setActive(!active)
    }
    
    return(
        <div className="question-container">
            <div className="question-container-header" onClick={handleQuestion}>
              <h3 className="question-title">{props.question}</h3>
              {active ? <img className="toggle-img" src={minusImg} alt="add-image" /> : <img className="toggle-img" src={addImg} alt="minus-image" />}
            </div>
            <div className="answer-container">
                {active ? <p>{props.answer}</p> : null}
            </div>
        </div>
    )
}

export default Question;