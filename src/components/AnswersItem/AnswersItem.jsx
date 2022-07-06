import './AnswersItem.css'

export function AnswersItem(props){
    const {text} = props
    return(
        <li className='answer-item'>{text}</li>
    )
}