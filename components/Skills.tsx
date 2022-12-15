import React from 'react'
import styles from './SKills.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';

function Skills() {

     const responsive = {
          superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
        };
  return (
    <section className={styles.skill} id={'skills'} >
          <Container>
               <Row>
                    <Col>
                         <div className={styles.skillBx}>
                              <h2>Skills</h2>
                              <p> I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease. I have been able to seemlessly use these technologies and more...</p>
                              <Carousel responsive={responsive} infinite={true} className={styles.skillSlider}>
                                   <div className={styles.item}>
                                        <img src="/images/meter1.svg" alt="Image" />
                                        <h5>TypeScript</h5>
                                   </div>
                                   <div className={styles.item}>
                                        <img src="/images/meter2.svg" alt="Image" />
                                        <h5>React</h5>
                                   </div>
                                   <div className={styles.item}>
                                        <img src="/images/meter3.svg" alt="Image" />
                                        <h5>Node.JS</h5>
                                   </div>
                                   <div className={styles.item}>
                                        <img src="/images/meter1.svg" alt="Image" />
                                        <h5>Git</h5>
                                   </div>
                                   <div className={styles.item}>
                                        <img src="/images/meter2.svg" alt="Image" />
                                        <h5>MSSQL</h5>
                                   </div>
                                   <div className={styles.item}>
                                        <img src="/images/meter3.svg" alt="Image" />
                                        <h5>Next.JS</h5>
                                   </div>
                              </Carousel>
                         </div>
                    </Col>
               </Row>
          </Container>
          <img className={styles.backgroundImgLeft} src="/images/color-sharp.png" alt="" />
    </section>
  )
}

export default Skills