import { Navigate } from "react-router-dom";
export default function userReducer(user, action){

    switch (action.type) {
        case "REGISTER":
            const { name, email, password, userLogged } = action;
            if(user){
                const userHasRegister = user.find((u) => u.email === email);
                if (userHasRegister) {
                    console.log("User Has Register, Please Login")
                    return user;
                } else {
                    // If user doesn't exist return new array with new item appended
                    return [...user, { name, email, password, userLogged }]
                }
            } else console.log("error from reducer")
        break;

        case "LOGIN": {
            const { email, password } = action;
            if(user){
                const userHasRegister = user.find((u) => u.email === email);
                if (userHasRegister) {
                    const checkPassword = userHasRegister.password === password;
                    if(checkPassword){
                        console.log("Login Success")
                        return user.map((u) =>
                        u.email === email ? { ...u, userLogged: true } : u
                        );
                    } else {
                        console.log("Please Try Again")
                    }
                }
            } else {
                console.log("Please create account")
            }
        }
        break;

        case "LOGOUT":{
            return user.map((u) =>
                u.userLogged === true ? { ...u, userLogged: false } : u
            );
        }

        default:
            throw new Error("Unhandled action " + action.type);
    }
}