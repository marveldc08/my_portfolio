import React from 'react'
import style from './Footer.module.css'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer className={style.footer} >
     <Container>
          <Row className={'align-items-center'} >
               <Col sm={6}>
                    <img src="/images/logo.svg" alt="logo" />
               </Col>
               {/* <Col sm={6}></Col> */}
               <Col sm={6}  className={`${style['text-center text-sm-end']} `} >
                    <div className={`${style['social-icon']} `}>
                         <a href=""><img src="/images/nav-icon1.svg" alt="social icon" /></a>
                         <a href=""><img src="/images/nav-icon2.svg" alt="social icon" /></a>
                         <a href=""><img src="/images/nav-icon3.svg" alt="social icon" /></a>
                    </div>
                    <p>CopyRight 2022. ALL Right Reserved</p>
               </Col>
          </Row>
     </Container>
    </footer>
  )
}

export default Footer