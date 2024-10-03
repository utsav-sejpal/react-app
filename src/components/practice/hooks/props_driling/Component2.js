import React from 'react'
import Component3 from './Component3'

export default function Component2(props) {
  console.log(props);
  
  return (
    <>
      <h1>Component 2</h1>
      <h1>{props.name}</h1>
      <Component3 name={props.name} />
    </>
  )
}
