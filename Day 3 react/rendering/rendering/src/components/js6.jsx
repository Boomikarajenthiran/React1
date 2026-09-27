

   let trackHeight = [200,354,265,378,476,102,3674]

   let mostDangerousPeak = 0
   let largetDrop = 0

   for(let l=1; l<trackHeight.length-1; l++){
       let previousHeight = trackHeight[l-1]
       let currentHeight = trackHeight[l]
       let nextHeight = trackHeight[l+1]

       if(currentHeight > previousHeight && currentHeight > nextHeight){
        let drop = currentHeight - nextHeight
        if(largetDrop < drop ){
            largetDrop = drop 
            mostDangerousPeak = currentHeight
        }
       }
   }
   console.log("mostDangerousPeak", mostDangerousPeak);
   console.log("largetDrop", largetDrop);
   

  