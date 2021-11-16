import React, {useEffect, useState} from 'react'
import LoginImg from '../images/register.svg'
import LogoImg from '../images/logo.svg'
import { useUser } from "../context/user-context";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
    const {user, dispatch} = useUser();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userLogged, setLogged] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("userLocal2", user)
        setLogged(true);
        if(user){
            if(user.length !== 0){
                const currentUser = user.find((u) => u.userLogged === true)
                if(currentUser){
                    navigate("/profile")
                }
            }
        }
    }, [user, navigate])
    
    function handleRegister (e) {
        e.preventDefault();
        if (name === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Isi data terlebih dahulu")
        }
        else if (password !== confirmPassword){
            alert("Password yang anda masukan tidak sama.")
        }
        else{
            dispatch({ type: "REGISTER", name, email, password, userLogged });
        console.log("user1", user)
        }
    };

    return (
        <div>
            <div className="bg-screen-blob h-screen flex justify-center items-center">
                <div className="w-5/6 md:w-2/3">
                    <div className="rounded-2xl bg-white h-full">
                        <div className="flex flex-col md:flex-row justify-between gap-x-12">
                            <img 
                                className="hidden md:block w-6/12 px-12" 
                                src={LoginImg} 
                                alt="" 
                            />
                            <div className="w-full">
                                <div className="py-16 pl-6 md:pl-2 pr-6 md:pr-12">
                                    <div className="flex justify-center pb-6">
                                        <img 
                                            className="flex h-10" 
                                            src={LogoImg} 
                                            alt="" 
                                        />
                                    </div>
                                    <form>
                                        <div>
                                            {/* Form 1 */}
                                            <div className="flex flex-wrap pt-3">
                                                <div className="w-full">
                                                <label className="tracking-wide text-sm font-bold">Name</label>
                                                <input
                                                    className="text-gray-900 appearance-none block w-full bg-gray-100 border border-gray-100 rounded py-2 px-2 my-2 text-xs leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    placeholder="John Doe" id='name' value={name} onChange={(e) => setName(e.target.value)}
                                                />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            {/* Form 2 */}
                                            <div className="flex flex-wrap pt-3">
                                                <div className="w-full">
                                                <label className="tracking-wide text-sm font-bold">Email</label>
                                                <input
                                                    className="text-gray-900 appearance-none block w-full bg-gray-100 border border-gray-100 rounded py-2 px-2 my-2 text-xs leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    placeholder="johndoe@mail.com" id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                                />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            {/* Form 3 */}
                                            <div className="flex flex-wrap pt-3">
                                                <div className="w-full">
                                                <label className="tracking-wide text-sm font-bold">Password</label>
                                                <input
                                                    className="text-gray-900 appearance-none block w-full bg-gray-100 border border-gray-100 rounded py-2 px-2 my-2 text-xs leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    placeholder="*********" id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                                />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            {/* Form 4 */}
                                            <div className="flex flex-wrap pt-3">
                                                <div className="w-full">
                                                <label className="tracking-wide text-sm font-bold">Confirm Password</label>
                                                <input
                                                    className="text-gray-900 appearance-none block w-full bg-gray-100 border border-gray-100 rounded py-2 px-2 my-2 text-xs leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    placeholder="*********" id='confirmPassword' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                                                />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center md:justify-start pt-8 md:pt-5">
                                            <button onClick={handleRegister} className="py-2.5 px-5 bg-purple-600 hover:bg-pink-600 rounded-md text-white text-sm font-bold">
                                                Register
                                            </button>
                                        </div>
                                    </form>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
