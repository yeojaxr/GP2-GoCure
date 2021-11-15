export default function videoReducer(likesVideo, action){
    switch (action.type) {
        case "ADD-VIDEO":{
            const{ userLikes } = action;
            console.log("halo context")
            const isExist = likesVideo.filter(item => item.userLikes.id === `${userLikes.id}`);
            if(likesVideo.length === 10){
                return [...likesVideo]
            }
            if(isExist){
                // add likesVideo to local storage if item doesnt exist in first render
                return [...likesVideo, { userLikes }]
            }
            else{
                // if item already in local storage return current state (likesVideo)
                return [...likesVideo]
            }
        }

        case "UPDATE-VIDEO": {
            const{ _id, _updateLike, _image, _category, _title } = action;
            console.log("halo context")

            return likesVideo.map((item) =>
                item.userLikes.id === _id ? { ...item, userLikes: {like: !_updateLike, id: _id, image: _image, category: _category, title: _title}} : item
            );
        }

        default:
            throw new Error("Unhandled action " + action.type);
    }
}