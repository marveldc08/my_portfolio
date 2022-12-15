import React from 'react'
import style from './Footer.module.css'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer className={style.footer} >
     <Container>
          <div className={'align-items-center'} style={{display: 'flex', justifyContent:'space-between', alignItems:'center'}} >
               <Col sm={6} style={{ display: 'flex', justifyContent:'center', alignItems:'center'}}>
                    <img src="/images/david-chinye-logo.png" alt="logo" />
               </Col>
               {/* <Col sm={6}></Col> */}
               <Col sm={6}  className={`${style['text-center text-sm-end']} `}  style={{display: 'flex', justifyContent:'center', alignItems:'center'}} >
                    <div className={`${style['social-icon']} `}>
                         <a target='_blank' href="https://linkedin.com/in/david-c-15303320b"><img src="/images/nav-icon1.svg" alt="social icon" /></a>
                         <a target='_blank' href="https://web.facebook.com/david.chinye.5/"><img src="/images/nav-icon2.svg" alt="social icon" /></a>
                         <a target='_blank' href="https://github.com/marveldc08"><img src="/images/github.svg" alt="social icon" /></a>
                    </div>
                    <p>CopyRight 2022. ALL Right Reserved</p>
               </Col>
          </div>
     </Container>
    </footer>
  )
}

export default Footer