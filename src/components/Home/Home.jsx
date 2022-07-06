import { useState } from 'react'
import { ActiveQuiz } from '../ActiveQuiz/ActiveQuiz'
import './Home.css'

export function Home(){
    const [quiz,setQuiz] = useState([
        {
            answers:[
                {text:'Вопрос 1'},
                {text:'Вопрос 2'},
                {text:'Вопрос 3'},
                {text:'Вопрос 4'},
            ]
        }
    ]) 
    return(
        <div className='quiz'>
            <div className='wrapper'>
            <ActiveQuiz answers={quiz[0].answers}/>
            </div>
        </div>
    )
}