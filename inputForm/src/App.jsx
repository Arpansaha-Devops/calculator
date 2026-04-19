// import { useState } from 'react'

import Form from "./Form"


function App() {

// const [name,setName] = useState("")
// const [number,setNumber] = useState("")
// const [email,setEmail] = useState("")
// const [age,setAge] = useState("")
// const [submit,setSubmit] = useState({})


// function handleName (e){
//   setName(e.target.value)
// }
// function handleAge (e){
//   setAge(e.target.value)
// }
// function handleNumber (e){
//   setNumber(e.target.value)
// }
// function handleEmail (e){
//   setEmail(e.target.value)
// }

// // show entered data in the span tag on click of submit button in UI not console --

// function handleSubmit(){
// setSubmit({
//   name:name,    
//   number:number,
//   email:email,
//   age:age
// })
// setAge("")
// setEmail("")
// setName("")
// setNumber("")
// }






  return (
    <>
     {/* <input type="text" placeholder='Enter your name' onChange={handleName} name='name' value={name} />
     <input type="tel" placeholder='Enter your phone number' onChange={handleNumber} name='phone' value={number} />
     <input type="email" placeholder='Enter your email' onChange={handleEmail} name='email' value={email} />
     <input type="age" placeholder='Enter your age' onChange={handleAge} name='age' value={age} />

     

<span> name : {submit.name} </span>
<span> number : {submit.number} </span>
<span> email : {submit.email} </span>
<span> age : {submit.age} </span>

     <button onClick={handleSubmit} >submit</button> */}


     <Form />
    </>
  )
}

export default App
