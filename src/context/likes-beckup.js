import { cloneElement } from "react";
import { Navigate } from "react-router-dom";

export default function likesReducer(likes, action){
    switch (action.type) {
        case "LIKE":{
            const{ userLikes } = action;
            const isExist = likes.filter(item => item.userLikes.id === `${userLikes.id}`);
            console.log("isExist", isExist)
            if(isExist.length === 0){
                // add likes to local storage if item doesnt exist
                return [...likes, { userLikes }]
            }
            else{
                // if item already in local storage return current state (likes)
                return [...likes]
            }
        }
        break;

        case "UNLIKE": {

        }

        case "EMPTY": {
            return [];
        }

        case "SEND": {
            const{ userLikes } = action;
            if (likes.length <= 15){
                return [...likes, { userLikes }]
            } else {
                return [...likes]
            }
        }
        break;

        default:
            throw new Error("Unhandled action " + action.type);
    }
}