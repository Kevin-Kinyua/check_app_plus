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
              <Link to='/login' className='header__register'><button class="button" type="button">Login</button></Link>
            </div>
        </header>
        
    )
}

export default Header