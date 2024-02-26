import React from 'react'

 function Sub3(props) {
  return (
    <div>
      <h1>Sub Component 3</h1>
      <h3> { props.cT.title }</h3>

      <hr />

      <ul>
        {
            props.users.map(( item,index ) => {
                return (
                    <li key={index}> {index} { item }</li>
                )
            })
        }
      </ul>

      <hr />

      <h1> x = { props.x }</h1>
      <h1> y = { props.y}</h1>
      <h1>view = { props.view ? "Say True": "Say False" }</h1>
    </div>
  )
}

export default Sub3
