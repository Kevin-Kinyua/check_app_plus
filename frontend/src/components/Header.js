import logo from '../img/25-png.png'

const Header = () => {
    return (
        <header className='header'>
            <div className='img-box'>
                <img src={logo} alt='' className='header__img' />
            </div>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className='header__list--item'><a href='##'>Home</a></li>
                    <li className='header__list--item'><a href='##'>Services</a></li>
                    <li className='header__list--item'><a href='##'>Find a Doctor</a></li>
                    <li className='header__list--item'><a href='##'>Contact</a></li>
                </ul>
            </nav>
            <div className='login-box'>
              <a href='#' className='header__login'><button class="button" type="button">Login</button></a>
            </div>
        </header>
    )
}

export default Header