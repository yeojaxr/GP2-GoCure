import { useState } from "react"
import { useNavigate } from "react-router-dom"
 
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
 
    let navigate = useNavigate()
 
    const emailBener = "yeojaxr@bities.com"
    const passwordBener = "123456"
 
    const ketikaKlikLogin = (event) => {
        event.preventDefault()
        if (email === emailBener && password === passwordBener) {
            setEmail("")
            setPassword("")
            alert("Anda berhasil login")
            navigate("/")
        } else {
            alert("email / password salah")
        }
    
    }
    return (
        <div>
            <form onSubmit={ketikaKlikLogin}>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/> <br />
 
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)}/> <br />
 
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
 
export default Login