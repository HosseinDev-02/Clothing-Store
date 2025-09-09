import React from 'react'

function Overlay({ show, setShow, className }) {
  return (
    <div onClick={() => setShow(false)} className={`fixed inset-0 bg-black/30 w-full h-full transition-all duration-300 z-40 ${show ? 'visible opacity-100' : 'invisible opacity-0'} ${className}`}></div>
  )
}

export default Overlay