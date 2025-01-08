import "./ProfileImage.css"
import {useUser} from "../../../../state/useUser.ts";

export const ProfileImage = () => {
    const {user} = useUser();

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