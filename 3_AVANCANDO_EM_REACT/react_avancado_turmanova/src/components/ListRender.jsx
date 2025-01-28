import { useState } from 'react'

import React from 'react'

const ListRender = () => {

    const [list] = useState("Matheus","Gabriel","Cadu");

  return (
    <div>
      <ul>
       
          {list.map((item) =>(
            <li>{itme}</li>
          ))}
        
      </ul>
    </div>
  )
}

export default ListRender