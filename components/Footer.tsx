import React from 'react'
import styles from './Footer.module.css'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer className={styles.footer} >
     <Container>
          <div className={styles.contentWrap} >
               <Col sm={6} style={{ display: 'flex', justifyContent:'center', alignItems:'center'}}>
                    <img src="/images/david-chinye-logo.png" alt="logo" />
               </Col>
               {/* <Col sm={6}></Col> */}
               <Col sm={6}  className={`${styles['text-center text-sm-end']} `}  style={{display: 'flex', justifyContent:'center', alignItems:'center'}} >
                    <div className={`${styles['social-icon']} `}>
                         <a target='_blank' href="https://linkedin.com/in/david-c-15303320b" rel="noreferrer"><img src="/images/nav-icon1.svg" alt="social icon" /></a>
                         <a target='_blank' href="https://web.facebook.com/david.chinye.5/" rel="noreferrer"><img src="/images/nav-icon2.svg" alt="social icon" /></a>
                         <a target='_blank' href="https://github.com/marveldc08" rel="noreferrer"><img src="/images/github.svg" alt="social icon" /></a>
                    </div>
                    <p>© CopyRight 2023. ALL Rights Reserved</p>
               </Col>
          </div>
     </Container>
    </footer>
  )
}

export default Footer