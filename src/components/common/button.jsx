import React from 'react'

export default function Button({name,onClick,type,className}) {
  return (
    <button type={type} onClick={onClick} className={`text-center bg-teal-700 py-2 px-10 ${className}`}>{name}</button>
  )
}
