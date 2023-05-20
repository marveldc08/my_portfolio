import React from 'react'
import styles from './Footer.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

function Footer() {
  return (
    <footer className={styles.footer} >
     <Container>
          <div className={styles.contentWrap} >
               <Col sm={6} style={{ display: 'flex', justifyContent:'center', alignItems:'center'}}>
                    <Image src="/images/david-chinye-logo.png" width={500} height={100} alt="logo" />
               </Col>
               {/* <Col sm={6}></Col> */}
               <Col sm={6}  className={`${styles['text-center text-sm-end']} `}  style={{display: 'flex', justifyContent:'center', alignItems:'center'}} >
                    <div className={`${styles['social-icon']} `}>
                         <a target='_blank' href="https://linkedin.com/in/david-c-15303320b" rel="noreferrer"><Image src="/images/nav-icon1.svg" width={500} height={100} alt="social icon" /></a>
                         <a target='_blank' href="https://web.facebook.com/david.chinye.5/" rel="noreferrer"><Image src="/images/nav-icon2.svg" width={500} height={100} alt="social icon" /></a>
                         <a target='_blank' href="https://github.com/marveldc08" rel="noreferrer"><Image src="/images/github.svg" width={900} height={300} alt="social icon" /></a>
                    </div>
                    <p>© CopyRight 2023. ALL Rights Reserved</p>
               </Col>
          </div>
     </Container>
    </footer>
  )
}

export default Footer