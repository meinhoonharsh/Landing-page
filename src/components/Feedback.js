import { TextField } from "@material-ui/core";
import React, {useState} from "react";
import "./Feedback.css";
import database from './firebase';

import Button from '@material-ui/core/Button';

function Feedback() {
  const [Name, setName] = useState('');
  
  const [email, setEmail] = useState('');

  const Push = () => {
    database.ref("users").push({
      Name : Name,
      Email : email,
    }).catch(alert);
  }
  
  return (
    
    <div className="Feedback-container">
      <section className="footer-subscription">
      
        <div className="sign-up">
          <form className="sign-up">
              <p>
                  Sign up to stay updated!
              </p>
            
            <TextField
              className="footer-input"
              name="name"
              type="text"
              placeholder="Name"
              value={Name}
              onChange={e => setName(e.target.value)}
            />

            <TextField
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <Button className="Feed-btns" onClick={Push}>
              Sign up
            </Button>
          </form>
        </div>
        <p className="footer-subscription-text">
          Please leave your valuable feedback!
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />

            <input
              className="footer-input"
              name="msg"
              type="text"
              placeholder="Type your message here!"
              cols="40"
              rows="5"
            />

            <button className="Feed-btns">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}
 export default Feedback;