import React from 'react'

function Button(props: { textName: string} ) {
  return (
    <>
      <button className='bg-[#533111] p-[.66rem_3rem_.66rem_3rem] rounded-[.5rem] text-[1rem] hover:bg-[#ca9e69]'>{props.textName}</button>
    </>
  )
}

export default Button