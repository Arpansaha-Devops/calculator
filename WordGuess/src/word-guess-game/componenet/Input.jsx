import { useState } from 'react'

export const Input = ({onInput = () => {}}) => {

    const[value, setValue] = useState("")

    function handleInput(e){
        onInput(e.target.value)
        setValue(e.target.value)
    }

  return (
  <>
  <input type="text" value={value} className='input' onChange={handleInput} />
  
  </>
  )
}
