import React from 'react'
import img from '../img/doctor-img01.png'
import { Link } from 'react-router-dom'

const BookDoctor = () => {
  return (
    <div className='doctorpage'>
        <div className='doctorpage_info'>
            <div className='doctorpage_bio'>
                <div className='doctorpage_img-box'>
                    <img src={img} alt='' />
                </div>
                <div className='text'>
                    <p className='name'>Dr. John Doe</p>
                    <p className='position'>Surgeon</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg> {4.7}
                    <p>Specialization</p>
                </div>
            </div>
            <div>
                <p>Consul fee: <span>KES{470}</span><br></br>Available time slots</p>
                <table>
                    <tr>
                        <td>Monday</td>
                        <td>{`8:00am - 6:00pm`}</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>{`8:00am - 6:00pm`}</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>{`8:00am - 6:00pm`}</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>{`8:00am - 6:00pm`}</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>{`8:00am - 6:00pm`}</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>{`9:00am - 12:00noon`}</td>
                    </tr>
                </table>
                <button>Book an appointment</button>
            </div>
        </div>
        <div>
            <ul>
                <li><Link>About</Link></li>
                <li><Link>Feedback</Link></li>
            </ul>
        </div>
        <div>
            <h1>About Dr. John Doe</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <h2>Education</h2>
            <p><span>2008 - 2010</span><span>Doctor's University</span></p>
            <p><span>2008 - 2010</span><span>Doctor's University</span></p>
            <h2>Experience</h2>
            <p><span>2008 - 2010</span><span>Major's Hospital</span></p>
            <p><span>2008 - 2010</span><span>Major's Hospital</span></p>
        </div>
    </div>
  )
}

export default BookDoctor