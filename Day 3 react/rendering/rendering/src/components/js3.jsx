

const planet = ["rock","water","rock","danger","water","rock"];

let waterFound = 0;
let dangerZones = 0;
let saveAreas = 0;

for ( let m = 0; m < planet.length; m++ ){
    console.log("rover scanning area", m +1, ":", planet[m]);
    
    if(planet[m] === "water"){
        waterFound++;
    }else if(planet[m] === "danger"){
        dangerZones++;
    }else{
        saveAreas++;
    }
}
 console.log("water founds area:",waterFound);
 console.log("danger founds area:",dangerZones);
  console.log("save Areasarea:",saveAreas);

  if(waterFound > 0 && dangerZones <= 1){
    console.log("planet landed successfully");
  }else{
       console.log("planet is not landed successfully");
  }

