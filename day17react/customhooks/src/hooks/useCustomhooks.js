

import { useState } from "react";

const useCustomhooks = () =>{

const [value,setValue] = useState(0)

const handlechange = () =>{

   setValue(value + 1)

} 

return{value,handlechange}

}

export default useCustomhooks