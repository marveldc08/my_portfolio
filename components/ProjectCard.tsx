import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Col } from 'react-bootstrap';
import styles from './Projects.module.css'
import { BsStars } from "react-icons/bs";

function ProjectCard({title, projLink, imgUrl}) {
  return (
    <Col sm={6} md={4}>
      <div className={styles.projectImgBox}>
        <Image src={imgUrl} width={500} height={100} alt="Project image" />

        <div className={styles.projectTxtBox} id={"projectTextBox"}>
          {/* <h4>{title}</h4>
          <span>{description}</span> */}
          <Link href={"projLink"}>
            <button>
              Experience <BsStars />{" "}
            </button>
          </Link>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard