import "./ProfileImage.css"
import {useProfile} from "../../../../state/useProfile.ts";

export const ProfileImage = () => {
    const {profile} = useProfile();

    return (
        <>
            <div className="profileImage">
                <img src="./perfil.avif" alt="xd" />
                <div>
                    <h3>{profile.user.nickname}</h3>
                    <p>{profile.user.email}</p>
                </div>
            
            </div>
        </>
    )
}