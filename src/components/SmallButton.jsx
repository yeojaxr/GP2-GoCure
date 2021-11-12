import React from 'react'
import { Link } from 'react-router-dom';
import { useUser } from "../context/user-context";

const SmallButton = (props) => {
    const {user, dispatch} = useUser();
    const currentUser = user.find((u) => u.userLogged === true)

    function handleClick() {
        if (props.title === "Logout") {
            console.log("logout");
            if(currentUser) {
                dispatch({type: "LOGOUT"})
                console.log(user);
            } 
        }
    }

    return (
        <div className="py-2.5">
            <Link to={{pathname: props.url}} onClick={() => handleClick()} className="py-2.5 px-5 bg-purple-600 hover:bg-pink-600 rounded-md text-white text-sm font-bold">
                {props.title}
            </Link>
        </div>
    )

}

export default SmallButton
