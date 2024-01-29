import React,{useContext} from 'react'
import userContext from '../Context/userContext'

export default function Profile(props) {

    const {user} = useContext(userContext)

  if(!user)return(
    <div><h1> Please Login ! </h1></div>
  )

  return(
    <>
        <h2>Welcome <span className='name'> {user.userName} </span> in Our Website</h2>
       
        <h2>Your Password is :- {user.passowrd}</h2>
    </>
  )
}
