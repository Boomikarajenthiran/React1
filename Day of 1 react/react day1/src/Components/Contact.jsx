import { Component } from "react";

class Contact extends Component{

    render(){
        
        return(
            <section className="Contact">
            
            <h1>Contact</h1>

            <p>we would love to hear from you.</p>

            <h2>Get in Touch</h2>

            <p>Email:  boo@mycreation9812@gmail.com</p>

            <p>Phone: 3916238671</p>

             <p>Location: Trichy, Tamil Nadu</p>

             <h2>Send us message</h2>
            
              <form >

              <input type="text" placeholder="Enter your name:"/>
              <br /><br />

              <input type="email"  placeholder="Enter your email:" />  
              <br /><br />

              <textarea placeholder="Enter your message"></textarea>

            <br /><br />

            <button type="submit">Send message</button>

              </form>         
            
            
            
            
            
            </section>
        )
    }
}

export default Contact