import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {ArrowRightCircle} from 'react-bootstrap-icons'
import styles from './Banner.module.css'
import headerImg from '../public/images/header-img.svg'

function Banner() {
     const [loopNum, setLoopNum] = useState(0);
     const [isDeleting, setIsDeleting] = useState(false);
     const toRotate = ["Web Developer", "Front End Developer", "Back End Developer","Web Designer", "Full-Stack Derveloper"]
     const [text, setText] = useState('')
     const [delta, setDelta] = useState(300 - Math.random() * 100); 
     const period =2000

     useEffect(() => {
       let ticker = setInterval(() => {
          tick()
       }, delta)
     
       return () => {clearInterval(ticker)}
     }, [text])

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
              setDelta(500)
          }
     }
     

  return (
    <div className={styles.banner} id={'home'}>
          <Container fluid>
               <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7} >
                         <span className={styles.tagline}>Welcome to My Portfolio</span>
                         <h1>{`Hi I'm David`} <span className={styles.wrap}>{text}</span> </h1>
                         <p>I am a profound and astute full-stack developer, who is passionate about building solutions and keen on problem-solving. </p>
                         <button onClick={()=> console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/> </button>
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