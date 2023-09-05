import React from 'react'
import img from '../img/feature-img.png'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__content'>
        <h1>Medibook <span>+</span></h1>
        <h3>Healthcare accessible at the tips of your finger</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        <button>Book an appointment</button>
      </div>
      <div className='home__image-box'>
        <img src={img} alt='' />
      </div>
    </div>
  )
}

export default Home