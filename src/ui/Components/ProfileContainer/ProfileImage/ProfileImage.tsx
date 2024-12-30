import "./ProfileImage.css"
import {UseUser} from "../../../../state/useUser.ts";

export const ProfileImage = () => {
    const {user} = UseUser();

    return (
        <>
            <div className="profileImage">
                <img src="./perfil.avif" alt="xd" />
                <div>
                    <h3>{user.nickname}</h3>
                    <p>{user.email}</p>
                </div>
            
            </div>
        </>
    )
}