import {Profiles} from "../entities";
import {createContext, ReactNode, useEffect, useState} from "react";
import profileService from "../service/api/ProfileService.ts";


// Que espero que retorne mi context? :
export interface ProfileContextType {
    profile: Profiles;
    setProfile: (profile: Profiles) => void;
    initUser: () => void;
}

export const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

type ContextProviderProps = {
    children: ReactNode;
}

const initProfile: Profiles =
    {
        id_profile: 0,
        user: {
            id_user: 0,
            nickname: "",
            email: "",
            password: "",
        },
        first_name: "",
        last_name: "",
        img: "",
        description: "",
    };

export const ProfileProvider = ({children}: ContextProviderProps) => {
    const [profile, setProfile] = useState<Profiles>(initProfile);

    const initUser = async () => {
        const response:Profiles = await profileService.profile();
        setProfile(response);
    }
    useEffect(() => {
    }, [profile]);

    return (
        <ProfileContext.Provider value={{profile, setProfile, initUser}}>
            {children}
        </ProfileContext.Provider>
    )
}