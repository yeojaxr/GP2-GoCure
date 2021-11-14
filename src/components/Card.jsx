import React, { useState, useEffect } from 'react'
import Heart from '../images/heart.svg'
import HeartFill from '../images/heart-fill.svg'
import {Link} from "react-router-dom"
import { useBlog } from "../context/blog-context";

const Card = (props) => {
    const {likesBlog, dispatch} = useBlog();
    let updateLike = false
    
    const [like, setLike] = useState(false)
    const [userLikes, setUserLikes] = useState("")

    // Update state after clicked
    const [_id, setId] = useState("")
    const [_updateLike, setUpdateLike] = useState(false)
    const [_image, setImage] = useState("")
    const [_category, setCategory] = useState("")
    const [_title, setTitle] = useState("")

    const isExist = likesBlog.filter(item => item.userLikes.id === `${_id}`);
    // if(isExist.length === 1){
    //     const setToggle = ;
    // }
    
    useEffect(() => {
        let likes = {
            like: like,
            id: props.id,
            category: props.category,
            title: props.title,
            image: props.image
        }
        setUserLikes(likes)
        console.log("Hai")
        console.log(userLikes)
    },[])
    
    useEffect(()=>{
        if(userLikes){
            console.log("like array", userLikes);
            dispatch({type: "ADD-BLOG", userLikes})
        } 
    },[dispatch, userLikes])
    
    useEffect(()=>{
        setId(props.id);
        setUpdateLike(like)
        setImage(props.image)
        setCategory(props.category)
        setTitle(props.title)
    },[like])

    function handleClick() {
        setLike(!like);
        dispatch({type: "UPDATE-BLOG", _id, _updateLike, _image, _category, _title})
        updateLike = !updateLike
        console.log("like clicked ", updateLike);
    }

    return (
    <>
        <div className="">
            <div className="text-gray-900">
                <Link to={`/${props.category}/${props.id}`}>
                    <div className="">
                        <img src={props.image} alt="card" className="object-cover object-right h-44 w-full rounded" />
                    </div>
                </Link>
                <div className="px-2 py-3 md:py-4">
                    <Link to={`/${props.category}/${props.id}`}>
                        <div className="font-bold  text-sm mb-2">
                            {props.title}
                        </div>
                        <p className="pb-1 md:pb-2 text-sm">
                            {props.description}
                        </p>
                    </Link>
                    <div className="flex">
                    <button onClick={()=> handleClick()}>
                        {isExist.length === 1 && isExist[0].userLikes.like ? <img className="h-5" src={HeartFill} alt="" /> : <img className="h-5" src={Heart} alt="" />}
                    </button>
                    <span className="pl-2 pt-1 text-xs">
                        {/* 12 */}
                    </span>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Card
