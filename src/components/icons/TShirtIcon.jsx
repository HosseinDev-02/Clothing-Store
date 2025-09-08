import React from 'react'
import { IoShirtOutline } from 'react-icons/io5'

function TShirtIcon({ width, height }) {
  return (
    <IoShirtOutline size={width ?? height}/>
  )
}

export default TShirtIcon