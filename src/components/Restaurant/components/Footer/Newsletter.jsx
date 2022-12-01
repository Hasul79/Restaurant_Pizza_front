import React , {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';


export default function Newsletter () {
 const [email, setEmail] = useState("");
 const [show, setShow] = useState(false);

 const sendEmail = async (e) => {
   e.preventDefault();

   const res = await fetch("/register", {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     }, body: JSON.stringify({
       email
     })
   });

   const data = await res.json();

   if (data.status === 401 || !data) {
     console.log("error")
   } else {
     console.log("Email sent");
     setShow(true);
     setEmail("")
   }
 }


return(
<>
        {
          show ? <Alert variant="primary" onClose={() => setShow(false)} dismissible>
            <Alert.Heading> Email Sent Successfully</Alert.Heading>
           
          </Alert> : ""
    }
  <div className="app__newsletter">
    <div  className="app__newsletter-heading">
      <SubHeading  title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" />
      <button type="submit" className="custom__button"   onClick={sendEmail}>Subscribe</button>
    </div>
  </div>
  </>
  )
};
