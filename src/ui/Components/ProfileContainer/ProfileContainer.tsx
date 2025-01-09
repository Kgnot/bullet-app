import "./ProfileContainer.css"
import {ProfileSVG} from "../../svg"
import { ProfileImage } from "./ProfileImage/ProfileImage"
import {useProfile} from "../../../state/useProfile.ts";
import {useEffect} from "react";

interface Props{
    className?:string
}

export const ProfileContainer = ({className}:Props) => {
    const {profile,initUser} = useProfile();


    useEffect(() => {
        initUser();
    }, [initUser]);

    return (
        <>
            <section className={`profileContainer ${className}`}>
                <div className="profileContainer-title">
                    <ProfileSVG width="32px"/>
                    <h2> {profile.first_name} </h2>
                </div>
                <div className="profileContainer-body">
                    <ProfileImage/>
                </div>
                <button className="profile-edit-button"> Editar </button>
            </section>
        </>
    )
}