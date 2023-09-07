import React from 'react'
import { Data_service } from '../JsonData/DataAdv'

const Services = () => {
  return (
    <div className='services'>
      <div className="services__search">
        <input type="text" className="services__input" />
        <a href="##" className="services__btn">Search</a>
      </div>
      <div className='services__cards'>
        <div className="cards">
            {
                Data_service.map((cardData) => {
                    return(
                    <div key={cardData.key} className="card">
                        <img src={cardData.image} alt="" className="card__frame" />
                        <div className="card_label">
                            <p>{cardData.p}</p>
                            <p>{cardData.num}+ Doctors</p>
                            <button>View</button>
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

export default Services