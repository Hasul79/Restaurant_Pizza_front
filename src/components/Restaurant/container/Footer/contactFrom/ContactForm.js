import React from 'react'
import './ContactForm.css'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const ContactForm = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_27ztplk', 'template_yifjgzg', form.current, 'iAbM6DRWswzaeu4Jw')
          e.target.reset()
      }; 
    return (

       
       
                <form ref={form} onSubmit={sendEmail} >
               
                   <h2 className='h2'>Contact Me </h2>
                    <input type="text" name="name" placeholder='Your Full Name' required/>
                    <input type="text" name="email" placeholder='Your Email' required/>
                    <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
                    <button type="submit" className="btn  bt">Send Message</button>
                </form>
      
           
    )
}
export default ContactForm