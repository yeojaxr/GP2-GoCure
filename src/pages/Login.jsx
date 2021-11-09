import React from 'react'
import Form from '../components/Form'
import SmallButton from '../components/SmallButton'
import LoginImg from '../images/home/video.svg'

const Login = () => {
    return (
        <div className="bg-purple-700 h-screen">
            <div className="px-64 py-12">
                <div className="rounded-2xl bg-white h-full grid grid-cols-2">
                    <img className="py-40 px-16" src={LoginImg} alt="" />
                    <div className="pt-20 pr-16">
                        <div className="pb-10 font-bold text-2xl">
                            Sign In
                        </div>
                        <Form title="Email" desc="johndoe@mail.com" />
                        <Form title="Password" desc="*********" />
                        <div className="pt-10">
                            <SmallButton title="Sign In" />
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
