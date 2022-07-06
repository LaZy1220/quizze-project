import './ActiveQuiz.css'

export function ActiveQuiz(){
    return(
        <div className='active-quiz'>
        <p className='question'>
            <span>
                <strong>2.</strong>
                Как дела?
            </span>
            <small>4 из 14</small>
        </p>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
    )
}