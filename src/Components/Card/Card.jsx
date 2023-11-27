import React from 'react'
import './Card.css';
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Card = ({emoji, heading, detail, mark, year}) => {
  const theme =useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
<div className="card">
    <img src={emoji} alt="" />
    <span>{heading}</span>
    <span style={{color: darkMode? 'White' : ''}}>{detail}</span>
    
    {/* <span className="c-button">Learn More</span> */}
</div>  )
}

export default Card