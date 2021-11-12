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
    const [userLogged, setLogged] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("userLocal2", user)
        setLogged(true);
        if(user){
            if(user.length !== 0){
                const currentUser = user.find((u) => u.userLogged === true)
                if(currentUser){
                    navigate("/blogs")
                }
            }
        }
    }, [user, navigate])
    
    function handleRegister (e) {
        e.preventDefault();
        dispatch({ type: "REGISTER", name, email, password, userLogged });
        console.log("user1", user)
    };

    return (
        <div>
            <div className="bg-screen-blob h-full">
                <div className="px-64">
                    <div className="rounded-2xl bg-white h-full">
                        <div className="grid grid-cols-2">
                            <img className="py-40 pl-16 pr-8" src={LoginImg} alt="" />
                            <div className="pt-16 pl-8 pr-16">
                                <div className="flex justify-center pb-6">
                                    <img className="flex h-10" src={LogoImg} alt="" />
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
                                                placeholder="johndoe@mail.com" id='email' value={email} onChange={(e) => setEmail(e.target.value)}
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
                                                placeholder="*********" id='password' value={password} onChange={(e) => setPassword(e.target.value)}
                                            />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <Form title="Name" desc="John Doe" />
                                    <Form title="Email" desc="johndoe@mail.com" />
                                    <Form title="Password" desc="*********" />
                                    <Form title="Confirm Password" desc="*********" /> */}
                                    <div className="pt-10">
                                        {/* <SmallButton title="Register" /> */}
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
    )
}

export default Register
