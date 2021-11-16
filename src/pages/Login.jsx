import React, { useState, useEffect } from "react";
import LoginImg from "../images/sign-in.svg";
import LogoImg from "../images/logo.svg";
import { useUser } from "../context/user-context";
import { useNavigate, Link } from "react-router-dom";

const Login = (props) => {
  const {user, dispatch} = useUser();
  const [userLogged, setLogged] = useState(false);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logSuccess, setLog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("userLocal login", user)
    setLogged(true);
    if(user){
        const currentUser = user.find((u) => u.userLogged === true)
        if(currentUser){
          navigate("/profile")
          setLog(true);
        }
      }
      else{
        console.log("Please register from use effect")
      }
  }, [user, navigate])
      
  function handleLogin (e) {
    e.preventDefault();
    dispatch({ type: "LOGIN", email, password, userLogged });
    setLog(true);
  };

  function redirectRegister() {
    dispatch({type: "CLEAR-USER"})
    return(
      <>
        <p className="text-sm pb-6">You don't have an account please 
          <Link to="/register">
            <b> Register</b>
          </Link>
        </p>
      </>
    )
  }

  console.log(logSuccess)

  return (
    <div>
      <div className="bg-screen-blob h-screen flex justify-center items-center">
        <div className="w-5/6 md:w-2/3 h-2/3">
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
                    <div className="flex justify-center md:justify-start pt-8 md:pt-3">
                      { logSuccess ? redirectRegister() : ""}
                      <button
                        onClick={handleLogin}
                        className={"py-2.5 px-5 bg-purple-600 hover:bg-pink-600 rounded-md text-white text-sm font-bold"}
                      >
                        Login
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
  );
};

export default Login;
