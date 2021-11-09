import React from 'react'
import Form from '../components/Form'
import SmallButton from '../components/SmallButton'
import LoginImg from '../images/home/video.svg'

const Register = () => {
    return (
        <div className="bg-purple-700 h-full">
            <div className="px-64 py-12">
                <div className="rounded-2xl bg-white h-full grid grid-cols-2">
                    <img className="py-52 px-16" src={LoginImg} alt="" />
                    <div className="pt-16 pr-16">
                        <div className="pb-10 font-bold text-2xl">
                            Register
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
    )
}

export default Register
