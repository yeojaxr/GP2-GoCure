export default function userReducer(user, action){

    switch (action.type) {
        case "REGISTER":
            const { name, email, password, userLogged } = action;
            let message = "";
            if(user){
                const userHasRegister = user.find((u) => u.email === email);
                if (userHasRegister) {
                    return [...user];
                } else {
                    // If user doesn't exist return new array with new item appended
                    return [...user, { name, email, password, userLogged }]
                }
            } else return user;
        break;

        case "LOGIN": {
            const { email, password } = action;
            let message = "";
            if(user){
                const userHasRegister = user.find((u) => u.email === email);
                if (userHasRegister) {
                    const checkPassword = userHasRegister.password === password;
                    if(checkPassword){
                        message = "Login Success"
                        return user.map((u) =>
                        u.email === email ? { ...u, userLogged: true, message: message } : u
                        );
                    } else {
                        return user;
                    }
                }
                else {
                    return user;
                }
            } else {
                return user;
            }
        }
        break;

        case "LOGOUT":{
            return user.map((u) =>
                u.userLogged === true ? { ...u, userLogged: false } : u
            );
        }
        
        case "CLEAR-USER": 
            if (user === undefined){
                return user;
            } else {
                return user;
            }
        break;
        
        // case "LIKE-BLOG":{
        //     const{ userBlogLikes, countClick } = action;

        //     if (countClick > 0){
        //         console.log("Hellow its > 0")
        //         return user.map((u) =>
        //             u.userLogged === true ? { ...u, userBlogLikes: [userBlogLikes] } : u
        //         ); 
        //     } else{
        //         console.log("Hellow its else")
        //         return user.map((u) =>
        //             u.userLogged === true ? { ...u, userBlogLikes: [userBlogLikes] } : u
        //         ); 
        //     }
        // }

        default:
            throw new Error("Unhandled action " + action.type);
    }
}