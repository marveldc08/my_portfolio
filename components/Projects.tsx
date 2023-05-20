import React, { useState } from 'react'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import styles from './Projects.module.css'
import ProjectCard from './ProjectCard'

function Projects() {
     const projects = [
       {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: "/images/pj1.png",
         projLink: "#",
       },
       {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: "/images/pj2.png",
         projLink: "#",
       },
       {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: "/images/pj3.png",
         projLink: "#",
       },
       {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: "/images/pj4.png",
         projLink: "#",
       },
       {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: "/images/pj5.png",
         projLink: "#",
       },
       {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: "/images/pj6.png",
         projLink: "#",
       },
     ];
     const secondProjects = [
       {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: "/images/project-img1.png",
         projLink: "#",
       },
       {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: "/images/project-img2.png",
         projLink: "#",
       },
       {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: "/images/project-img3.png",
         projLink: "#",
       },
       {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: "/images/project-img1.png",
         projLink: "#",
       },
       {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: "/images/project-img2.png",
         projLink: "#",
       },
       {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: "/images/project-img3.png",
         projLink: "#",
       },
     ];
     const thirdProjects = [
       {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: "/images/project-img1.png",
         projLink: "#",
       },
       {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: "/images/project-img2.png",
         projLink: "#",
       },
       {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: "/images/project-img3.png",
         projLink: "#",
       },
       {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: "/images/project-img1.png",
         projLink: "#",
       },
       {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: "/images/project-img2.png",
         projLink: "#",
       },
       {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: "/images/project-img3.png",
         projLink: "#",
       },
     ];

     const [active, setActive] = useState('one')
  return (
    <section className={styles.project} id={'projects'} > 
          <Container>
               <Row>
                    <Col >
                         <h2>Projects</h2>
                         <p> Here are Some of the projects I have worked on. Building these awesome projects have been such blissful experience for Me. I prefer to keep learning, continue challenging myself, and do interesting things that matter.</p>
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
                                   <Tab.Pane eventKey={'second'} >
                                        <Row>
                                             {
                                                  secondProjects.map((project, index) => {
                                                       return ( 
                                                       <ProjectCard key={index} {...project} />
                                                       )
                                                  })
                                             }
                                        </Row>
                                   </Tab.Pane>
                                   <Tab.Pane eventKey={'third'} >
                                        <Row>
                                             {
                                                  thirdProjects.map((project, index) => {
                                                       return ( 
                                                       <ProjectCard key={index} {...project} />
                                                       )
                                                  })
                                             }
                                        </Row>
                                   </Tab.Pane>
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