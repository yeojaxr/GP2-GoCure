import React from 'react'
import Form from '../components/Form'
import SmallButton from '../components/SmallButton'
import LoginImg from '../images/register.svg'
import LogoImg from '../images/logo.svg'

const Register = () => {
    return (
        <div className="bg-purple-700 h-full flex">
            <div className="px-64 py-12 flex items-center">
                <div className="rounded-2xl bg-white h-full flex items-center">
                    <div className="grid grid-cols-2">
                        <img className="py-40 pl-16 pr-8" src={LoginImg} alt="" />
                        <div className="pt-16 pl-8 pr-16">
                            <div className="flex justify-center pb-6">
                                <img className="flex h-10" src={LogoImg} alt="" />
                            </div>
                            <Form title="Name" desc="John Doe" />
                            <Form title="Email" desc="johndoe@mail.com" />
                            <Form title="Password" desc="*********" />
                            <Form title="Confirm Password" desc="*********" />
                            <div className="pt-10">
                                <SmallButton title="Register" />
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register
