import React, { useState } from "react";
import Form from "../components/Form";
import SmallButton from "../components/SmallButton";
import LoginImg from "../images/sign-in.svg";
import LogoImg from "../images/logo.svg";

const Login = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  
  };

  return (
    <div>
      <div className="bg-screen-blob h-screen">
        <div className="px-64 py-16 flex items-center">
          <div className="rounded-2xl bg-white h-full flex items-center">
            <div className="grid grid-cols-2">
              <img
                className="py-24 pl-16 pr-8"
                src={LoginImg}
                alt=""
              />
              <div className="pt-16 pl-8 pr-16">
                <div className="flex justify-center pb-6">
                  <img
                    className="flex h-10"
                    src={LogoImg}
                    alt=""
                  />
                </div>
                <form>
                  {/* Form 2 */}
                  <div>
                    <div className="flex flex-wrap pt-3">
                      <div className="w-full">
                        <label className="tracking-wide text-sm font-bold">
                          Email
                        </label>
                        <input
                          className="text-gray-900 appearance-none block w-full bg-gray-100 border border-gray-100 rounded py-2 px-2 my-2 text-xs leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          placeholder="johndoe@mail.com"
                          id="email"
                          value={email}
                          onChange={(e) =>
                            setEmail(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  {/* Form 3 */}
                  <div>
                    <div className="flex flex-wrap pt-3">
                      <div className="w-full">
                        <label className="tracking-wide text-sm font-bold">
                          Password
                        </label>
                        <input
                          className="text-gray-900 appearance-none block w-full bg-gray-100 border border-gray-100 rounded py-2 px-2 my-2 text-xs leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          placeholder="*********"
                          id="password"
                          value={password}
                          onChange={(e) =>
                            setPassword(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-10">
                    <button
                      onClick={handleLogin}
                      className="py-2.5 px-5 bg-purple-600 hover:bg-pink-600 rounded-md text-white text-sm font-bold"
                    >
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
  );
};

export default Login;
