import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext()

const UserProvider = ({children})=>{
  const [token, setToken] = useState("")
  const [email, setEmail] = useState("")

  const logout = () => {setToken(""); setEmail("")}

  const login = async (email, password)=>{
    try {
      const res = await fetch("http://localhost:5000/api/auth/login",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password})
      })
      const data = await res.json()
      if (!res.ok) throw new Error("credenciales inválidas")
      setToken(data.token)
      setEmail(data.email)
      return true
    } catch (err) {
      return false
    }
  }

  const register = async (email, password)=>{
    try {
      const res = await fetch("http://localhost:5000/api/auth/register",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password})
      })
      const data = await res.json()
      if (!res.ok) throw new Error("credenciales inválidas")
      setToken(data.token)
      setEmail(data.email)
      return true
    } catch (err) {
      return false
    }
  }

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/me",{
        headers: { 
          Authorization: `Bearer ${token}`
        }
      })
      const data = await res.json()
      if (!res.ok) throw new Error("credenciales inválidas")
      return data
    } catch (err){
      return null
    }
  }

  return(
    <UserContext.Provider value={{token, setToken, email, setEmail, logout, login, register, getProfile}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider