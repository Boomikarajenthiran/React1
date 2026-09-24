import React from 'react'

const Header = () => {
  return (
    <>
    <div>
    <div className= "nav">
        
            <div className="logo">
                TECH<span className="sublogo">CMANTIX</span>
                <br /><h4 className="subminilogo">TECHNOLOGIES PVT LID</h4>
            </div>
            <div className="link">
               <a href="">Home</a>  
               <a href="">About</a>  
               <a href="">Contact</a>  
               <a href="">Help</a>  

               <Button/>
               
            </div>
        
        





</div>

            {/*  */}

         
   </div>

    </>
  )
}
export default Header


const Button =()=>{
    return (
        <>
        
        <button  className="btn">  Click me</button> 
        
        </>
    )
}

export const List =()=>{

    return(
<>
<div className="main">
<h1>Website Development</h1>

<p>Home-Solutions-Development&Design-Website Development</p>

</div>
</>
    )
}     
