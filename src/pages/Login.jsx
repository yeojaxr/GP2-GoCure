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
          navigate("/blogs")
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

  console.log(logSuccess)

  return (
    <div>
      <div className="bg-screen-blob h-screen">
        <div className="px-64">
          <div className="rounded-2xl bg-white h-full">
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
                  <div className="pt-3">
                    { logSuccess 
                      ? <><p className="text-sm pb-6">You don't have an account please 
                          <Link to="/register">
                            <b> Register</b>
                          </Link>
                        </p>
                        </>
                      : ""
                      }
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
  );
};

export default Login;
