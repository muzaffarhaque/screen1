import React from 'react'
import "./nevbar.scss"
import img from "../../assets/image 1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown,faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default function Nevbar() {
  return (
    <>
    
    <header className='header'>
    <img src={img} className="heaser-logo" alt="header" />
  <ul>
    <li>My Assignment</li>
    <li>Chat with Mentor</li>
    <li> <FontAwesomeIcon icon={faUserCircle}/> ProfileName  <FontAwesomeIcon icon={faAngleDown}/></li>
  </ul>
    </header>
    
    </>
  )
}
