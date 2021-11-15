import React, {
  useReducer,
  useEffect,
  useContext,
} from "react";
import userReducer from "./user-reducer";

// Initialized Context
const UserContext = React.createContext(null);

let initialCart;
try {
  initialCart =
    JSON.parse(localStorage.getItem("user")) ?? [];
} catch {
  console.error("The user could not be parsed into JSON.");
  initialCart = [];
}

export function UserProvider(props) {
    // const [state, dispatch] = useReducer(reducerName, initialState);
    // Reducer return two array, first is state and second is function called dispatch
    const [user, dispatch] = useReducer(userReducer, initialCart);
    useEffect(() => localStorage.setItem("user", JSON.stringify(user)), [user]);
    const contextValue = {user, dispatch};
    return (
      // Provider for state
      <UserContext.Provider value={contextValue}>
        {props.children}
      </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error(
        "useCart must be used within a UserProvider. Wrap a parent component in <UserProvider> to fix this error."
      );
    }
    return context;
}
