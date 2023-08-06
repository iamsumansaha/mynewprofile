import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Education from "../../img/Education-page.png";
import Game from "../../img/Tic-tac-toe-Game.png"
import Realstate from "../../img/Real-state.png"
import Zomato from "../../img/Zomato-clone.png"
import myPortfolio from '../../img/myportfolio.png'
import 'swiper/css'
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Portfolio = () => {
    const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
<div className="portfolio" id='Portfolio'>
{/* heading */}
<span style={{color: darkMode? 'white' : ''}}> My Recent</span>
<span>Projects..</span>



{/* slider */}
<Swiper
spaceBetween={30}
slidesPerView={1}
grabCursor={true}
className='portfolio-slider'
>
    <SwiperSlide>
        <a href=""><img src={myPortfolio} alt="" /></a>
    </SwiperSlide>
    <SwiperSlide>
        <a href="https://real-state-react-app.netlify.app/"><img src={Realstate} alt="Real state" /></a>
    </SwiperSlide>
    <SwiperSlide>
        <a href="https://tic-tac-toe-xo-react-game.netlify.app/"><img src={Game} alt="Tic-tac-toe game" /></a>
    </SwiperSlide>
    <SwiperSlide>
    <a href="https://sales-page-react.netlify.app/"><img src={Education} alt="Education page" /></a>
    </SwiperSlide>
    <SwiperSlide>
        <a href="https://iamsumansaha.github.io/zomato-clone/"><img src={Zomato} alt="Zomato clone" /></a>
    </SwiperSlide>

</Swiper>
</div>  )
}

export default Portfolio