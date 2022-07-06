import './Header.css'
import {Link} from 'react-router-dom'
export function Header (){
    return(
        <header className='header'>
            <span className='header__logo'>LaZy Quizze</span>
            <ul className='header-list'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/authorization'>Authorization</Link></li>
            </ul>
        </header>
    )
}
