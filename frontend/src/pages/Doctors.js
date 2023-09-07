import React from 'react'
import { Data_doctor } from '../JsonData/DataAdv'
import { Link } from 'react-router-dom'

const Doctors = () => {
  return (
    <div className='doctors'>
      <div className="doctors__search">
        <input type="text" className="doctors__input" />
        <a href="##" className="doctors__btn">Search</a>
      </div>
      <div className='doctors__cards'>
        <div className="cards">
            {
                Data_doctor.map((cardData) => {
                    return(
                    <div key={cardData.key} className="card">
                        <img src={cardData.image} alt="" className="card__frame" />
                        <div className="card_label">
                            <p>{cardData.p}</p>
                            <p>{cardData.p2}</p>
                            <Link to='/book_doctor' className='card__button'>Book</Link>
                        </div>
                    </div>
                    )
                })
            }
        </div>  
      </div>
    </div>
  )
}

export default Doctors