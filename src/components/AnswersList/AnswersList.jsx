import { AnswersItem } from '../AnswersItem/AnswersItem'
import './AnswersList.css'

export function AnswersList(props){
    const {answers}=props
    return(
        <ul className='answer-list'>
            {
                answers.map((answer,index)=>{
                   return(
                    <AnswersItem 
                    key={index}
                    {...answer} 
                    />
                   ) 
                })    
            }
        </ul>
    )
}