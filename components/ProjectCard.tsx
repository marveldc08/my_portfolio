import React from 'react';
import Link from 'next/link';
import { Col } from 'react-bootstrap';
import styles from './Projects.module.css'
import { BsStars } from "react-icons/bs";

function ProjectCard({title, projLink, imgUrl}) {
  return (
    <Col sm={6} md={4}>
      <div className={styles.projectImgBox}>
        <img src={imgUrl} alt="Project image" />

        <div className={styles.projectTxtBox} id={"projectTextBox"}>
          {/* <h4>{title}</h4>
          <span>{description}</span> */}
          <Link href={"projLink"}>
            <button>Experience <BsStars /> </button>
          </Link>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard