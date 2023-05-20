import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styles from './NavBar.module.css'
import Link from 'next/link';
import { Button } from 'react-bootstrap';

import logo from '../public/images/logo.svg';
import navIcon1 from  '../public/images/nav-icon1.svg';
import navIcon2 from  '../public/images/nav-icon2.svg';
import navIcon3 from  '../public/images/github.svg';


function NavBar() {
     const [activeLink, setActiveLink] = useState('home');
     const [scrolled, setScrolled] = useState(false);
     const [isServer, setIsServer] = useState(true)

     useEffect(() => {setIsServer(false)}, [])
     useEffect(() => {
          const onScroll = () => {
               if (isServer && window.scrollY > 50) {
                    setScrolled(true)
               }else{
                    setScrolled(false)
               }
          }
       window.addEventListener('scroll', onScroll);
       return () => window.addEventListener('scroll', onScroll);
     }, [])
  return (
     <Navbar expand="lg" className={scrolled ? styles.navbarScrolled : styles.navbar}>
      <Container id={"container"} style={{ width:"100%"}}>
        {/* <div className={styles.navbarBrand} >
          <img src={'/images/david-chinye-logo.png'} alt='Logo'  />
        </div> */}
        <Navbar.Toggle className={styles.navbarToggle} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={styles.collapse} style={{width:"50%",  justifyContent:"space-between",alignItems:"center"}}>
          
          <Nav  className="dropdown">
            <Nav.Link href="#home" className={activeLink === 'home' ? styles.activeNavbarLink : styles.navLink} onClick={()=> setActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? styles.activeNavbarLink : styles.navLink} onClick={()=> setActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? styles.activeNavbarLink : styles.navLink} onClick={()=> setActiveLink('projects')}>Projects</Nav.Link>
           
          </Nav>
          <div className={styles.navText}>
               <div className={styles.socialIcon}>
                    <Link className={styles.socialIconLink} target='_blank'  href={'https://linkedin.com/in/david-c-15303320b'}><Image src={navIcon1} alt='icon' width={100} height={100} /></Link>
                    <Link className={styles.socialIconLink} target='_blank' href={'https://web.facebook.com/david.chinye.5/'}><Image src={navIcon2} alt='icon' width={100} height={100} /></Link>
                    <Link className={styles.socialIconLink} target='_blank' href={'https://github.com/marveldc08'}><img src={'/images/github.svg'} alt='icon'  /></Link>
               </div>
          </div>
          <Link className={styles.navConnect} href={'#connect'}>
               <Button className={styles.navbarTextButton}> <span className={styles.navbarTextButtonSpan} > {`Let's Connect`}</span> </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar