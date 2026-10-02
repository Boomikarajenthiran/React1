

const Help = () => {
  return (
    <div className="bg-violet-400  p-30">

      <h1 className="text-3xl font-bold text-center mb-8"> React Help Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

       
        <div className="bg-white p-6 rounded-xl ">
  
          <h2 className="text-xl font-bold ">React Basics</h2>
         
          <p className="bg-lime-200"> Learn the basics of React components and JSX.</p>
        </div>

       
        <div className="bg-white p-6 rounded-xl ">
         
          <h2 className="text-xl font-bold ">React Props</h2>
         
          <p className="bg-lime-200"> Learn how to pass data between components using props.</p>
        </div>

 
        <div className="bg-white p-6 rounded-xl ">
          
          <h2 className="text-xl font-bold">React State</h2>

          <p className="bg-lime-200"> Learn how state is used to manage component data.</p>
        


        </div>

    
        <div className="bg-white p-6 rounded-xl ">


          <h2 className="text-xl font-bold ">React Router</h2>
          


          <p className="bg-lime-200">Learn how to navigate between different React pages. </p>
        
        </div>

      </div>

    </div>
  );
};

export default Help;