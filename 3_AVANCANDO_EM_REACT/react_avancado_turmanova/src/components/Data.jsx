import { useState } from 'react'

import React from 'react'

const Data = () => {

    let someData = 10

    const [anotherNumber, setAnotherNumber] = useState(15);

  return (
    <div>
        <div>
            <p>valor: {someData}</p>
            <button onClick={()=> {someData = 15}}>Mudar Variavel{}</button>
            <div>
                <p>valor: {anotherNumber}</p>
                <button onClick={()=> setAnotherNumber(20)}>mudar state</button>
            </div>
        </div>
    </div>
  )
}

export default Daçta