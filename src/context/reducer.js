import { Navigate } from "react-router-dom";
export default function userReducer(user, action){

    switch (action.type) {
        case "REGISTER":
            const { name, email, password, userLogged } = action;
            const userHasRegister = user.find((u) => u.email === email);
            let userSuccess = false;

            if (userSuccess) {
                return <Navigate to="/blogs"/>
            }
            else if (userHasRegister) {
                console.log("User Has Register, Please Login")
                return user;
            } else {
                 // If user doesn't exist return new array with new item appended
                return [...user, { name, email, password, userLogged }]
            }

        case "LOGIN": {
            const { email, password } = action;
            const userHasRegister = user.find((u) => u.email === email);
            if (userHasRegister) {
                const checkPassword = userHasRegister.password === password;
                if(checkPassword){
                    console.log("Login Success")
                } else {
                    console.log("Please Try Again")
                }
            } else {
                console.log("Please create account")
            }
        }
        break;

        case "LOGOUT":
            console.log("logout")
        break;

        default:
            throw new Error("Unhandled action " + action.type);
    }
}