import React, { useEffect } from 'react'
import styles from './SKills.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import CircularProgress, {
     CircularProgressProps,
   } from '@mui/material/CircularProgress';
   import Typography from '@mui/material/Typography';
   import Box from '@mui/material/Box';


const CircularProgressWithLabel = ( props: CircularProgressProps & { value: number },) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} color={'secondary'}  size={150} thickness={5} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography
        sx={{padding:'3em', fontSize:'30px', fontWeight:'600'}}
          variant="caption"
          component="div"
          color= {'white'}
    
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}
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

        const [progress, setProgress] = React.useState(10);

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
                                        <CircularProgressWithLabel value={70} />
                                        <h5>TypeScript</h5>
                                   </div>
                                   <div className={styles.item}>
                                        <CircularProgressWithLabel value={90} />
                                        <h5>JavaScript</h5>
                                   </div>
                                   <div className={styles.item}>
                                        <CircularProgressWithLabel value={90} />
                                        <h5>React</h5>
                                   </div>
                                   <div className={styles.item}>
                                        <CircularProgressWithLabel value={80} />
                                        <h5>Node.JS</h5>
                                   </div>
                                   <div className={styles.item}>
                                        <CircularProgressWithLabel value={70} />
                                        <h5>Git</h5>
                                   </div>
                                   <div className={styles.item}>
                                        <CircularProgressWithLabel value={50} />
                                        <h5>MSSQL</h5>
                                   </div>
                                   <div className={styles.item}>
                                        <CircularProgressWithLabel value={90} />
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