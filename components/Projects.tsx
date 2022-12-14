import React, { useState } from 'react'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import styles from './Projects.module.css'
import ProjectCard from './ProjectCard'

function Projects() {
     const projects = [
          {
               title: "Business Startup",
               description: 'Design & Development',
               imgUrl: '/images/project-img1.png'
          },
          {
               title: "Business Startup",
               description: 'Design & Development',
               imgUrl: '/images/project-img2.png'
          },
          {
               title: "Business Startup",
               description: 'Design & Development',
               imgUrl: '/images/project-img3.png'
          },
          {
               title: "Business Startup",
               description: 'Design & Development',
               imgUrl: '/images/project-img1.png'
          },
          {
               title: "Business Startup",
               description: 'Design & Development',
               imgUrl: '/images/project-img2.png'
          },
          {
               title: "Business Startup",
               description: 'Design & Development',
               imgUrl: '/images/project-img3.png'
          },
     ]

     const [active, setActive] = useState('one')
  return (
    <section className={styles.project} id={'projects'} > 
          <Container>
               <Row>
                    <Col>
                         <h2>Projects</h2>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vero quam. Vitae blanditiis velit sit vero magnam, ullam doloremque adipisci obcaecati. Libero placeat, eos beatae tempora quaerat provident corporis corrupti!</p>
                              <Tab.Container id={'projectsTab'} defaultActiveKey="first" >
                                   <Nav variant="pills" className={`${styles['nav-pills']} ${styles["nav"]}`} defaultActiveKey={'/home'}>
                                        <Nav.Item className={`${styles["nav-item"]}`} onClick={()=> setActive('one')}>
                                             <Nav.Link className={`${styles["nav-link"]} ${active === "one" && styles["active"]}`} eventKey="first">Tab One</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className={`${styles["nav-item"]}`} onClick={()=> setActive('two')}>
                                             <Nav.Link className={`${styles["nav-link"]} ${active === "two" && styles["active"]}`} eventKey="second">Tab Two</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className={`${styles["nav-item"]}`} onClick={()=> setActive('three')}>
                                             <Nav.Link className={`${styles["nav-link"]} ${active === "three" && styles["active"]}`} eventKey="third">Tab Three</Nav.Link>
                                        </Nav.Item>
                                   </Nav>
                                   <Tab.Content>
                                        <Tab.Pane eventKey={'first'}>
                                             <Row>
                                                  {
                                                       projects.map((project, index) => {
                                                            return ( 
                                                                <ProjectCard key={index} {...project} />
                                                            )
                                                       })
                                                  }
                                             </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey={'second'} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempora qui nihil dignissimos dolore perspiciatis maxime suscipit! Provident nemo ducimus qui. Ea repellat corporis veniam dicta ut optio non odit?</Tab.Pane>
                                        <Tab.Pane eventKey={'third'} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem blanditiis, mollitia ipsum nesciunt harum repudiandae molestiae nostrum nulla a voluptas voluptatum unde pariatur velit aliquam saepe suscipit possimus eaque id.</Tab.Pane>
                                   </Tab.Content>
                              </Tab.Container>
                    </Col>
               </Row>
          </Container>
          <img className={styles.backgroundImgRight} src="/images/color-sharp2.png" alt="color gradient" />
    </section>
  )
}

export default Projects