import {useContext} from "react";
import {ProfileContext} from "../context/profileContext.tsx";


export const useProfile = () => {
    const context = useContext(ProfileContext);
    if (!context) throw new Error("useUser must be used within an UserProvider");
    return context;
}