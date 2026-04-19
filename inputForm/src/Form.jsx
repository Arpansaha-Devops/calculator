import React from 'react'
import { useState } from 'react'

const initialState = {  
    name : "",  
    email : "",
    phone : "",
    address : ""
}

const Form = () => {

    const [form,setForm] = useState(initialState)
    const [submit,setSubmit] = useState({})



    const handleChange = (e) => {
        
    const {name,value} = e.target
      setForm({
          ...form,
          [name] : value
      })
  }


    function handleSubmit(){
        setSubmit(form)
        setForm(initialState)
    }



  return (
     <>
     
     <input type="text" name='name' value={form.name} onChange={handleChange} />
     <input type="text" name='email' value={form.email} onChange={handleChange} />
     <input type="text" name='phone' value={form.phone} onChange={handleChange} />
     <input type="text" name='address' value={form.address} onChange={handleChange} />
     


     <span> name : {submit.name}</span>
     <span> email : {submit.email}</span>
     <span> phone : {submit.phone}</span>
     <span> address : {submit.address}</span>


     <button onClick={handleSubmit} >Submit</button>
     </>
  )

}
export default Form