

const About = () => {
  return (
    <div className="bg-pink-200 p-6 h-130 flex justify-around ">
      <div className="flex justify-between gap-50 p-15">
     {/* Its our react About page */}
     <div className="w-40 h-40">

       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29n7Rhs3-zx846s65fyh7lRP7bj71bhNW1sfhF26K8w&s=10" alt="" />
        <h1 className="text-center text-3xl  text-blue-500 ">VIT </h1>
        {/* <p text-center text-3xl>“Vite is a fast frontend build tool that provides a development server and builds optimized production applications.”</p> */}
     </div>

     <div className="w-40 h-40">

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0tnJLY0clPAxNUUzHL1MOvDw4OYU1uSLoogJImKqGvw&s=10" alt="" />
      <h1  className="text-center text-3xl  text-blue-500">ANGULAR</h1>
       
     </div>
     <div className="w-40 h-40">

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtonLFQ9AKmsEhe2MmmGBRTiHK5NzD4aDoTVJRztNnrg&s=10" alt="" />
    
       <h1 className="text-center text-3xl  text-blue-500"> REACT</h1>
     </div>
     </div>

    </div>
  )
}

export default About
