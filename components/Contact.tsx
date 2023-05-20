import React, { useRef, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { BiSend } from "react-icons/bi";
import { TiThumbsUp, TiThumbsDown } from "react-icons/ti";
import style from './Contact.module.css'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import Image from 'next/image';

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
     const [showError, setShowError] = useState(false);

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
               body: JSON.stringify(formDetails) //formDetails is all that the user input
          })
          setButtonText("Send")
          let result = response.json();
          setFormDetails(formInitialDetails)
          if (result) {
               setStatus({success: true, message: "Message Sent successfully"})
          }else{setStatus({success: true, message: "Something went wrong, please try again later."})}
     }
     ////////////////////////////////////////////////////////

     const form = useRef();

     const sendEmail = (e) => {
       e.preventDefault();
       //this part is for showing error
       if (formDetails === formInitialDetails) {
          setShowError(true)
       } else {
          setShowError(false)
          setButtonText("Sending...")
     
          /////This part is the function
          ///install the emailjs package
       emailjs.sendForm('service_hqj50cn', 'marvel_icnzyn4', form.current, 'MTbF9ST0pP3Kpt_v-')
         .then((result) => {
             console.log(result.text);
         }, (error) => {
             console.log(error.text);
         });
         setButtonText("Send")
         setFormDetails(formInitialDetails)
         Swal.fire({
          title: 'SENT',
          icon: 'success',
          html:
            'Hello There, ' +
            'Thank You for reaching out to Me. ' + '<b/>' +
            'I look forward to doing great projects with You.',
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText:
            ` Alright!`,
          confirmButtonAriaLabel: 'Thumbs up, great!',
        })
       }
       
     };

     
  return (
    <section className={`${style["contact"]}`} id={'connect'}>
          <Container>
               <Row className='align-items-center' >
                    <Col md={6}>
                         <Image src="/images/contact-img.svg" width={500} height={100} alt="contact image" />
                    </Col>
                    <Col md={6}>
                         <h2>Get In Touch</h2>
                       {
                         showError && <div className={`${style["errorWrap"]}`}>
                                             <div className={`${style["error"]}`}>
                                                  <p>Kindly fill the form</p>
                                             </div>
                                        </div>
                       }
                         <form ref={form} onSubmit={sendEmail}>
                              <Row>
                                   <Col sm={6} className='px-1' >
                                        <input type="text" value={formDetails.firstName} required name='from_firstName' placeholder="First Name" onChange={(e)=> onFormUpdate('firstName', e.target.value)} />
                                   </Col>
                                   <Col sm={6} className='px-1' >
                                        <input type="text" value={formDetails.lastName} required name='from_lastName' placeholder="Last Name" onChange={(e)=> onFormUpdate('lastName', e.target.value)} />
                                   </Col>
                                   <Col sm={6} className='px-1' >
                                        <input type="email" value={formDetails.email} required name="from_email" placeholder="Email" onChange={(e)=> onFormUpdate('email', e.target.value)} />
                                   </Col>
                                   <Col sm={6} className='px-1' >
                                        <input type="tel" value={formDetails.phone} name="from_phone" placeholder="Phone Number" onChange={(e)=> onFormUpdate('phone', e.target.value)} />
                                   </Col>
                                   <Col>
                                        <textarea name="message" id="message" required value={formDetails.message} cols={30} rows={6} placeholder="message" onChange={(e)=> onFormUpdate('message', e.target.value)}></textarea>
                                        <button type='submit' ><span>{buttonText} <BiSend style={{marginLeft:'10px'}}/></span>   </button>
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