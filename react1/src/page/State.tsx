import {useState} from "react";


export default function State() {
    const[isLoggedIn, setIsLoggedIn] = useState(false)

    function handleLogin(){
        setIsLoggedIn(true)
    }
    function handleLogout(){
        setIsLoggedIn(false)
    }
  return (
     <>
     <div>
         <button onClick={handleLogin}>Login</button>
         <button onClick={handleLogout}>LogOut</button>
         <h1>User is {isLoggedIn.valueOf() ? 'logged in':'logged out'}</h1>
     </div>
     </>
  )
}