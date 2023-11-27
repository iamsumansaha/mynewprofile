import "./Education.css";
import React from "react";
import Cap from "../../img/cap2.webp";
import Book from "../../img/book.png";
import Bag from "../../img/bag.avif";
import { motion } from "framer-motion";
import { useContext } from "react";
import { themeContext } from '../../Context';





const Education = () => {
  const Animation = { 
    whileInView:{
      x:0, y:0, opacity:1
    },
    one:{
      opacity:0,
      x: "-100%"
    },
    two:{
      opacity:0,
      y: "-100%"
    },
    three:{
      opacity:0,
      y: "100%"
    }
   };

  const theme =useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
  
    < div id="education"
    style={{
      background : darkMode? 'black': '',
      color : darkMode? 'white': ''
    }}>
      <h2>Qualification</h2>
       <section>
       <motion.div className="eBox-1"
       whileInView={Animation.whileInView}
       initial={Animation.one}>
            <img src={Cap} alt="" />
            <h2>B.Tech In Computer Science And Engineering</h2>
            <span>Guru Nanak Institute of Technology</span>
            <p>2023</p>
            <h1>9.0(CGPA)</h1>
          </motion.div>
          <motion.div className="eBox-2"
          whileInView={Animation.whileInView}
          initial={Animation.two}>
            <img src={Bag} alt="" />
            <div className="text-2">
            <h2>Higher-Secondary</h2>
            <span>Gorabazar I.C.institution</span>
            <p>2017</p>
            <h1>79%</h1>
            </div>
          </motion.div>
          <motion.div className="eBox-3"
          whileInView={Animation.whileInView}
          initial={Animation.three}>
            <img src={Book} alt="" />
           <div className="text-3">
           <h2>10th Standard</h2>
            <span>Gorabazar I.C.Institution</span>
            <p>2015</p>
            <h1>83%</h1>
           </div>
          </motion.div>
       </section>
    </div>
  );
};

export default Education;
