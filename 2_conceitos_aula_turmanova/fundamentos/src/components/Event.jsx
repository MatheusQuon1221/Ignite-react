

import React from 'react'

const Event = (e) => {
console.log(e)
const handleClick = () =>{

    console.log("execucao")
}

const renderFunction = (x) => {
    if(x){
        return <h1>Render This</h1>
    }else{
        return <h1>Render Other thing</h1>
    }
}




  return (
    <div>
        <div>
            <button onClick={handleClick}>Clique aqui - with function</button>
        </div>
        {renderFunction(true)}
        {renderFunction(false)}
    </div>
  )
}



export default Event