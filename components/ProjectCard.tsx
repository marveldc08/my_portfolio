import React from 'react'
import { Col } from 'react-bootstrap'
import styles from './Projects.module.css'

function ProjectCard({title, description, imgUrl}) {
  return (
    <Col sm={6} md={4} >
          <div className={styles.projectImgBox}>
               <img src={imgUrl} alt="Project image" />
          </div>
          <div className={styles.projectTxtBox} id={'projectTextBox'}>
               <h4>{title}</h4>
               <span>{description}</span>
          </div>
    </Col>
  )
}

export default ProjectCard