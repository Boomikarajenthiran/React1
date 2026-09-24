import React from 'react'

const Footer = () => {
  return (
    <div>
      
        <div className="first">
         
           <h2 className="first1">Let’s Create Together</h2>

           <p>At TechCmantix – software development agency in Trichy, we’re not just developers; we’re your partners in progress.
            Let’s embark on a digital journey that transforms your vision into reality.</p>
        </div>

        <div className="second">

            <div className="second1">

                <h2>Mail us: info@techcmantix.com</h2>

            </div>
            <div className = "second2">

                <h2>LET'S CHAT!</h2>

                <h3>+91 8877883368 / +91 9944193544</h3>

            </div>

        </div>
        <div>

            <Foots/>
        </div>



    </div>
  )
}

export default Footer

const Foots =()=>{

    return(
<>

<div>
    <div className="secondfooter">
       <div>


           <h2 className= "f1">SERVICES</h2>
            <ul>
                <li>Web Developmen</li>
                <li>CRM Development</li>
                <li>CRM Development</li>
                <li>Custom API Development</li>
                <li>Mobile App Development Services</li>
                <li>Plug-in Development</li>
                <li>Ecommerce Development</li>
            </ul>

       </div>
       <div>
           <h2 className= "f2">Solutions</h2>
         <ul>
            <li>Development & Design</li>
            <li>Digital Marketing</li>
            <li>QA Testing & Support</li>
            <li>Chat GPT Development Services</li>
            <li>SaaS Development</li>
            <li>Web Hosting & Support</li>
         </ul>
       </div>

       <div>

      <h2 className= "f3">Internship</h2>

      <p>Are you a college student eager to dive into the world of technology and innovation?</p>
        
       </div>
    </div>
</div>
</>
    )
}
