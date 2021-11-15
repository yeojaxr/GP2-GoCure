export default function blogReducer(likesBlog, action){
    switch (action.type) {
        case "ADD-BLOG":{
            const{ userLikes } = action;
            console.log("halo context")
            const isExist = likesBlog.filter(item => item.userLikes.id === `${userLikes.id}`);
            if(likesBlog.length === 16){
                return [...likesBlog]
            }
            if(isExist){
                // add likesBlog to local storage if item doesnt exist in first render
                return [...likesBlog, { userLikes }]
            }
            else{
                // if item already in local storage return current state (likesBlog)
                return [...likesBlog]
            }
        }

        case "UPDATE-BLOG": {
            const{ _id, _updateLike, _image, _category, _title } = action;
            console.log("halo context")

            return likesBlog.map((item) =>
                item.userLikes.id === _id ? { ...item, userLikes: {like: !_updateLike, id: _id, image: _image, category: _category, title: _title}} : item
            );
        }

        default:
            throw new Error("Unhandled action " + action.type);
    }
}