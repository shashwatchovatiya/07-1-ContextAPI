import React,{useState,useContext} from 'react'
import userContext from '../Context/userContext'

export default function Login() {

    const [userName,setUserName] = useState('')
    const [passowrd,setPassword] = useState('')

    const {setUser} = useContext(userContext)

    const SubmitChang = (e) =>{
        e.preventDefault()
        setUser({userName,passowrd})
    }
   
  return (
   <>
        <h1>Login In</h1>
        <input 
        type="text" 
        name="text" 
        placeholder='Enter Your User Name'
        value={userName} 
        onChange={(e)=> setUserName(e.target.value)}
        /><br /><br />

        <input 
        type="password" 
        name="passowrd"  
        value={passowrd}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Enter Your Password'
        className='p-2'
        /><br /><br />
        <button onClick={SubmitChang}>Submit</button><br />
   </>
  )
}
