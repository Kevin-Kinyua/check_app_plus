import logo from '../img/25-png.png'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className='img-box'>
                <img src={logo} alt='' className='header__img' />
            </div>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className='header__list--item'><Link to='/'>Home</Link></li>
                    <li className='header__list--item'><Link to='/services'>Services</Link></li>
                    <li className='header__list--item'><Link to='/doctors'>Find a Doctor</Link></li>
                    <li className='header__list--item'><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
            <div className='login-box'>
<<<<<<< HEAD
              <Link to='/login' class="button">Login</Link>
=======
              <a href='/login' className='header__register'><button class="button" type="button">Login</button></a>
>>>>>>> 5007714a5e0d836e6adbf6c85bafd85846268951
            </div>
        </header>
        
    )
}

export default Header