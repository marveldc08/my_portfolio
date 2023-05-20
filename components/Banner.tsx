/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import {ArrowDownCircle} from 'react-bootstrap-icons'
import { BsDownload } from "react-icons/bs";
import styles from './Banner.module.css'
// import hh from '../public/resume(3).pdf'


function Banner() {
     const [loopNum, setLoopNum] = useState(0);
     const [isDeleting, setIsDeleting] = useState(false);
     const toRotate = ["A Web Developer", "A Front End Developer", "A Web Designer", "A Back End Developer", "A Full-Stack Developer"]
     const [text, setText] = useState('')
     const [delta, setDelta] = useState(300 - Math.random() * 100); 
     const period =3000

    
     const tick = ()=>{
          let i = loopNum % toRotate.length;
          let fullText = toRotate[i];
          let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

          setText(updatedText)

          if (isDeleting) {
               setDelta(prevDelta => prevDelta / 2)
          }

          if (!isDeleting && updatedText === fullText) {
               setIsDeleting(true);
               setDelta(period);
          } else if(isDeleting && updatedText === ""){
              setIsDeleting(false);
              setLoopNum(loopNum +1);
              setDelta(300)
          }
     }
     useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);

        return () => {
          clearInterval(ticker);
        };
      });



  return (
    <div className={styles.banner} id={'home'}>
          <Container fluid>
               <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7} >
                         <span className={styles.tagline}>Welcome to My Portfolio</span>
                         <h1>{`Hi I'm David,`} </h1>
                         <div className={styles.rollTextWrap}>
                              <h1><span className={styles.wrap}>{text}</span></h1>
                         </div>
                         
                         <p className={styles.content}>I am a profound and astute full-stack developer, who is passionate about building solutions and keen on problem-solving. </p>
                         <a href='David_Resume.pdf' download={'David_Resume.pdf'} className={styles.downloadBtn} onClick={()=> console.log('connect')}>Download CV <BsDownload size={25}/> </a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                         <img src={'/images/header-img.svg'} alt="Header Image" />
                    </Col>
               </Row>
          </Container>
    </div>
  )
}

export default Banner