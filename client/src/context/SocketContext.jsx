import { createContext, useContext, useEffect, useState } from "react";
import {io} from 'socket.io-client';
import { AuthContext } from "./AuthContext";

export const SocketContext = createContext()

export const SocketContextProvider = ({children}) => {
    const { currentUser } = useContext(AuthContext);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        setSocket(io("http://localhost:4000"))
    }, []);

    useEffect(() => {
        console.log(currentUser)
        currentUser && socket?.emit("newUser", currentUser.userInfo.id);
    }, [currentUser, socket])

    return (
        <SocketContext.Provider value={{socket}}>
            {children}
        </SocketContext.Provider>
    );
}
