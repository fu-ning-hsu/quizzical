import React from "react"

export default function Question(props) {
   const [selectedAnswer, setSelectedAnswer] = React.useState("") 
    
   function handleClick(input) {
       props.selectAnswer()
       setSelectedAnswer(input)
    }
    
   function styleBtn(answer) {
       let style
       
       if (!props.isCompleted) {
            style = selectedAnswer == answer ? "answer-selected answer" : "answer"    
       } else {
           switch (true) {
               case answer == props.correctAnswer:
               style = "answer-correct answer";
               break;
               
               case selectedAnswer == answer && answer != props.correctAnswer:
               style = "answer-incorrect answer";
               break;
               
               default:
               style = "answer"
           }
       }
       return style
   }
    
    return (
        <div className="question-container">
           <h3  className="question-title">{props.question}</h3>
            <div className="question-choices">
                {props.allAnswers.map((answer, idx) => 
                    <button 
                        className={styleBtn(answer)}
                        key={idx}
                        value={answer}
                        onClick={() => handleClick(answer)}
                    >{answer}</button>)}
            </div>
            <hr />
        </div>
    )
}