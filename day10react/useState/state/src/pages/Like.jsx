
import { useState } from "react"

const Like = () => {

const [like,setLike] = useState(false)

const handlelike = () =>{

setLike(!like)

}

  return (
    <div className="bg-fuchsia-200 h-135 text-center p-35 font-bold">

   <h1>MY POST</h1>
 
    <p>Click the Like Button!</p>

    <button className="bg-red-400 rounded-2xl p-2 text-white" onClick={handlelike}>{like?"liked ❤️ ":"like"}</button>

     {like && <p>You liked this post!</p>}

    </div>
  )
}

export default Like