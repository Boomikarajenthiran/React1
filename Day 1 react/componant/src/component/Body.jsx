import React from 'react'

const Body = () => {
  return (
    <>
    <div>

      <div className="body">
         {/* <div> */}
         <h1 className="title">Who We Are?</h1>
          {/* </div> */}

          {/* <div> */}
         <h2 className="content">At TechCmantix – software development agency in Trichy, we don’t just build websites; 
          we create digital experiences that resonate with your audience. As an established 
          IT service provider, we offer cutting-edge technology solutions across various industry verticals.
          Our headquarters are in Tiruchirappalli, India, with development offices spanning Canada,
          USA, Singapore, and Bahrain.</h2>
      </div>
      <div className = "divide">
         <div> 
          <img className="img" src="https://techcmantix.com/wp-content/uploads/2024/04/About-Our-Journey-2.webp" alt="" />
         </div>

         <div>
          <h2 className="subtopic"> Our Journey</h2>
          
          <p className="mini ">Founded in 2006 as a humble web startup, TechCmantix - software development agency in Trichy has rapidly scaled the technology peaks.
             With over 100 successful projects, we’ve partnered with clients from diverse industries across Asia Pacific, America, and Europe.
             Our journey is fueled by a passion for innovation, a commitment to excellence, and a relentless pursuit of customer satisfaction.</p>
          </div>
      </div>

      <Productcard/>

    </div>
    </>
  )
}
export default Body


const Productcard =()=>{
  
  return(
<>
<div>
    <div className="product-card">
      <div className="card1" >

              <h2>Web Magic</h2>

             <p>From pixel to code, we create online experiences that captivate.
             Your website won’t just be a URL—it’ll be a virtual powerhouse.</p>
 
      </div>

      <div className="card2">

            <h2>E-Commerce Alchemy</h2>

            <p>Our mission-critical e-commerce portals? They’re like rocket boosters for sales.
            Seamless transactions, happy customers—our specialty.</p>
     </div>

     <div className="card3">

           <h2>Word of Mouth Champions</h2>

          <p>Our clients? They’re not just clients; they’re our vocal advocates.
           76% of our business? Repeat customers. Need we say more?</p>
     </div>
   </div>
</div>

</>
  )
}

