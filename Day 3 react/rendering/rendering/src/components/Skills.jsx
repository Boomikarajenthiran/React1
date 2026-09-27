

const Skills = ({myskills}) => {
    
  return (
    <div>
      <h2>my skills</h2>
 
       <ul>

        {myskills.map((skill)=>{

          return <li key={skill}>{skill}</li>

        })}

       </ul>

    </div>
  );
};

export default Skills

