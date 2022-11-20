import React from "react"
import Start from "./components/Start"
import Quiz from "./components/Quiz"

export default function App() {
    const [ isStarted, setIsStarted ] = React.useState(false)
    const [ quizData, setQuizData] = React.useState([])    
    
    function getQuizData() {
    fetch("https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=multiple") 
            .then(res => res.json())
            .then(data => {
                data.results.map(item => {
                    const allAnswers = item.incorrect_answers
                    const num = Math.floor(Math.random() * 4)
                    allAnswers.splice(num, 0, item.correct_answer)
                    item.all_answers = allAnswers
                    return item
                })
                setQuizData(data.results)
            })
    }
    
    
    function startQuiz() {
        getQuizData()
        setIsStarted(true)        
    }
    
    return (
      isStarted ? <Quiz getQuizData={getQuizData} quizData={quizData} /> : <Start startQuiz={startQuiz} />
    )
}
