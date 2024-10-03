import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import ChildComponent from "./ChildComponent";

export const UserContext = createContext();

export default function ParentComponent() {
    const [user, setUser] = useState("Jesse Hall");

    return (
        <>
            <UserContext.Provider value={user}>
                <h1>{`Hello ${user}!`}</h1>
                <ChildComponent />
            </UserContext.Provider>
        </>
    );
}
