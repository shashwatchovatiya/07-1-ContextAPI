import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/ContextProvider'

function App() {


  return (
    <UserContextProvider>
       <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
    // <>
    //   <h1>React with Context Api</h1>
    // </>
  )
}

export default App
