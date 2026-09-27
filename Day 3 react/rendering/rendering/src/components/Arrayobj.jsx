
// const Arrayobj = ({dataStudents}) => {
//   return (
//     <div>

//           { dataStudents.map((datass)=>(

//                   <div key= {datass .id}>

//                       <h2>{datass.name}</h2>

//                        <p>{datass.id}</p>

//                        <p>{datass.course}</p>

//                   </div>

//           ))  }

//     </div>
//   )
// }
// export default 

const Arrayobj = ({ dataStudents }) => {
  return (
    <div>

      {dataStudents.map((datass) => (
        <div key={datass.id}>

          <h2>{datass.name}</h2>

          <p>{datass.id}</p>

          <p>{datass.course}</p>

        </div>
      ))}

    </div>
  );
};

export default Arrayobj;
