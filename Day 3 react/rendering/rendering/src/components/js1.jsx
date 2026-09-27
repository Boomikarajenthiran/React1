

    let arr = [678,645,756]
let capacity = 0
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        // console.log(i,j);
        
        let min 

        console.log(min);
        
         if(arr[i]<arr[j]){
             min = arr[i]
            //  console.log(`capacity${capacity}`);
            
         }
         else{
              min = arr[j]
            //  console.log(`else capacity${capacity}`);

         }


         let base = j-i

         console.log('min',min);

         console.log('base',base);

         
        let area = base * min

      console.log('area',area);
      

         if(capacity<area){
             capacity=area
         }
    }
}

 console.log(capacity);










