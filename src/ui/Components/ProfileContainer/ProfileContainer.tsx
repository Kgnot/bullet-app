import "./ProfileContainer.css"
import {ProfileSVG} from "../../svg"
import { ProfileImage } from "./ProfileImage/ProfileImage"

interface Props{
    className?:string
}

export const ProfileContainer = ({className}:Props) => {
    return (
        <>
            <section className={`profileContainer ${className}`}>
                <div className="profileContainer-title">
                    <ProfileSVG width="32px"/>
                    <h2> Perfil de Usuario </h2>
                </div>
                <div className="profileContainer-body">
                    <ProfileImage/>
                </div>
                <button className="profile-edit-button"> Editar </button>
            </section>
        </>
    )
}