import "./ProfileContainer.css"
import {ProfileSVG} from "../../svg"
import { ProfileImage } from "./ProfileImage/ProfileImage"
import {UseUser} from "../../../state/useUser.ts";

interface Props{
    className?:string
}

export const ProfileContainer = ({className}:Props) => {
    const {user} = UseUser();

    return (
        <>
            <section className={`profileContainer ${className}`}>
                <div className="profileContainer-title">
                    <ProfileSVG width="32px"/>
                    <h2> {user.nickname} </h2>
                </div>
                <div className="profileContainer-body">
                    <ProfileImage/>
                </div>
                <button className="profile-edit-button"> Editar </button>
            </section>
        </>
    )
}