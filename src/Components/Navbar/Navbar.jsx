import React from 'react';
import './Navbar.css';
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'
import { themeContext } from '../../Context'
import { useContext } from 'react'
<<<<<<< HEAD
=======

const Navbar = () => {
   
  return (
    <div className="n-wrapper" id='Navbar'>
        <div className="n-left">
            <div className="n-name">Suman...</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <Link spy={true} to='Navbar' smooth={true}>
                    <li>Home</li>
                    </Link>

                    <Link spy={true} to='Skill' smooth={true}>
                    <li>SKILLs</li>
                    </Link>

                    <Link spy={true} to='education' smooth={true}>
                    <li>Qualification</li>
                    </Link>

                    <Link spy={true} to='Portfolio' smooth={true}>
                    <li>Project</li>
                    </Link>

                    <Link spy={true} to='Contact' smooth={true}>
                    <li>Contact</li>
                    </Link>
                
                </ul>
            </div>
            <a href="https://iamsumansaha.github.io/newlinklist/"><button className="button n-button">About</button></a>
        </div>

    </div>
  )
}

export default Navbarimport React from 'react';
import './Navbar.css';
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'
>>>>>>> 53b43c8b362430a0d7a2f36d69fe699faccc7eb6

const Navbar = () => {
   
  return (
    <div className="n-wrapper" id='Navbar'>
        <div className="n-left">
            <div className="n-name">Suman...</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <Link spy={true} to='Navbar' smooth={true}>
                    <li>Home</li>
                    </Link>

                    <Link spy={true} to='Skill' smooth={true}>
                    <li>SKILLs</li>
                    </Link>

                    <Link spy={true} to='education' smooth={true}>
                    <li>Qualification</li>
                    </Link>

                    <Link spy={true} to='Portfolio' smooth={true}>
                    <li>Project</li>
                    </Link>

                    <Link spy={true} to='Contact' smooth={true}>
                    <li>Contact</li>
                    </Link>
                
                </ul>
            </div>
            <a href="https://iamsumansaha.github.io/newlinklist/"><button className="button n-button">About</button></a>
        </div>

    </div>
  )
}

export default Navbar
