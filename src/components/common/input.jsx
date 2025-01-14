import React from 'react'

export default function Input({label,name,onChange,placeholder,type}) {
  return (
    <div className="flex flex-col">
        <label className="input-label mb-1">{label}</label>
        <input type={type} className='p-2' placeholder={placeholder} name={name} onChange={onChange}/>
    </div>
  )
}
