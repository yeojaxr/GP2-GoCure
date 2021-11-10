import { useState } from "react"
import { useNavigate } from "react-router-dom"
 
function Register() {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
 
    let navigate = useNavigate()
 
    const ketikaKlikRegister = (event) => {
        event.preventDefault()
        if (fullName === "" || email === "" || password === ""){
            alert("Lengkapi data terlebih dahulu")
        }
        else if (password !== confirmPassword) {
            setConfirmPassword("")
            alert("Password yang anda masukkan salah.")
        } 
        else{
            alert("Registrasi berhasil!")
            navigate("/Login")
        }
    
    }
    return (
        <div>
            <form onSubmit={ketikaKlikRegister}>
                <label htmlFor="email">Full Name: </label>
                <input type="text" name="text" id="text" onChange={(e) => setFullName(e.target.value)}/> <br />

                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/> <br />
 
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)}/> <br />

                <label htmlFor="password">Confirm Password:</label>
                <input type="password" name="password" id="password" onChange={e => setConfirmPassword(e.target.value)}/> <br />
 
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
 
export default Register