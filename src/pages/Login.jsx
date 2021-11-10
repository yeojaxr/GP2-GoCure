import React from 'react'
import Form from '../components/Form'
import SmallButton from '../components/SmallButton'
import LoginImg from '../images/sign-in.svg'
import LogoImg from '../images/logo.svg'

const Login = () => {
    return (
        <div className="bg-purple-700 h-screen flex">
            <div className="px-64 py-16 flex items-center">
                <div className="rounded-2xl bg-white h-full flex items-center">
                    <div className="grid grid-cols-2">
                        <img className="py-24 pl-16 pr-8" src={LoginImg} alt="" />
                        <div className="pt-16 pl-8 pr-16">
                            <div className="flex justify-center pb-6">
                                <img className="flex h-10" src={LogoImg} alt="" />
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
        </div>
    )
}

export default Login
