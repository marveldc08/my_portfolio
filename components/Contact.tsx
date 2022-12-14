import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { GrSend } from "react-icons/gr";
import style from './Contact.module.css'

function Contact() {
     const formInitialDetails ={
          firstName: '',
          lastName: "",
          email: "",
          phone: "",
          message: ""
     }
     interface Iprop {
          message?: string| undefined,
          success?: boolean
     }
     const [formDetails, setFormDetails] = useState(formInitialDetails);
     const [buttonText, setButtonText] = useState("Send");
     const [status, setStatus] = useState<Iprop>();

     const onFormUpdate = (category, value) => {
          setFormDetails({
               ...formDetails,[category]:value
          })
     }

     const handleSubmit = async(e) => {
          e.preventDefault();
          setButtonText("Sending...")
          let response = await fetch('http://localhost:5000/contact',{
               method: "POST",
               headers: {
                    "Content-Type": "Application/json; charset: utf-8"
               },
               body: JSON.stringify(formDetails)
          })
          setButtonText("Send")
          let result = response.json();
          setFormDetails(formInitialDetails)
          if (result) {
               setStatus({success: true, message: "Message Sent successfully"})
          }else{setStatus({success: true, message: "Something went wrong, please try again later."})}
     }
  return (
    <section className={`${style["contact"]}`} id={'connect'}>
          <Container>
               <Row className='align-items-center' >
                    <Col md={6}>
                         <img src="/images/contact-img.svg" alt="contact image" />
                    </Col>
                    <Col md={6}>
                         <h2>Get In Touch</h2>
                         <form onSubmit={handleSubmit}>
                              <Row>
                                   <Col sm={6} className='px-1' >
                                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=> onFormUpdate('firstName', e.target.value)} />
                                   </Col>
                                   <Col sm={6} className='px-1' >
                                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=> onFormUpdate('lastName', e.target.value)} />
                                   </Col>
                                   <Col sm={6} className='px-1' >
                                        <input type="email" value={formDetails.email} placeholder="Email" onChange={(e)=> onFormUpdate('email', e.target.value)} />
                                   </Col>
                                   <Col sm={6} className='px-1' >
                                        <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e)=> onFormUpdate('phone', e.target.value)} />
                                   </Col>
                                   <Col>
                                        <textarea name="message" id="message"  value={formDetails.message} cols={30} rows={6} placeholder="message" onChange={(e)=> onFormUpdate('message', e.target.value)}></textarea>
                                        <button type='submit' ><span>{buttonText}</span> <GrSend style={{marginLeft:'10px', color:'inherit'}}/>  </button>
                                   </Col>
                                   {/* {
                                        status.message &&
                                        <Col>
                                             <p className={status.success === false ? "danger" : "success"}></p>
                                        </Col>
                                   } */}
                              </Row>
                         </form>
                    </Col>
               </Row>
          </Container>
    </section>
  )
}

export default Contact