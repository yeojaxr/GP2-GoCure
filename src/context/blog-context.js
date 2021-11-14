import React, {
    useReducer,
    useEffect,
    useContext,
  } from "react";
  import blogReducer from "./blog-reducer";
  
  // Initialized Context
  const BlogContext = React.createContext(null);
  
  let initialLikes;
  try {
    initialLikes =
      JSON.parse(localStorage.getItem("likesBlog")) ?? [];
  } catch {
    console.error("The user could not be parsed into JSON.");
    initialLikes = [];
  }
  
  export function BlogProvider(props) {
      // const [state, dispatch] = useReducer(reducerName, initialState);
      // Reducer return two array, first is state and second is function called dispatch
      const [likesBlog, dispatch] = useReducer(blogReducer, initialLikes);
      useEffect(() => localStorage.setItem("likesBlog", JSON.stringify(likesBlog)), [likesBlog]);
      const contextValue = {likesBlog, dispatch};
      return (
        // Provider for state
        <BlogContext.Provider value={contextValue}>
          {props.children}
        </BlogContext.Provider>
      );
  }
  
  export function useBlog() {
      const context = useContext(BlogContext);
      if (!context) {
        throw new Error(
          "useCart must be used within a UserProvider. Wrap a parent component in <UserProvider> to fix this error."
        );
      }
      return context;
  }
  