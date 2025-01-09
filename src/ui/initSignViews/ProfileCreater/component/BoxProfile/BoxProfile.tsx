import "./BoxProfile.css"
import {useSignIn} from "../../../../../state/useSignIn.ts";
import React from "react";

interface BoxProfileProps {
    className?: string;
}

export const BoxProfile = ({className}: BoxProfileProps) => {
    const {signIn, updateDescriptionAndImage} = useSignIn();

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const newImageUrl = URL.createObjectURL(file);
            updateDescriptionAndImage(signIn.description, newImageUrl);
        }
    }
    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        updateDescriptionAndImage(event.target.value, signIn.img); // Actualizamos solo la descripción
    };

    return (
        <div className={`BoxProfile ${className}`}>
            <h3>Editar Perfil</h3>
            <div className="BoxProfile_img_edit">
                <img src={signIn.img} alt="perfil defecto"/>
                <input type="file" id="uploadImgSI" onChange={handleImageChange}/>
                <label htmlFor="uploadImgSI">Subir Imagen</label>
            </div>
            <div className="BoxProfile_desc_container">
                <p>Descripción: </p>
                <textarea
                    name="descripcion"
                    rows={5}
                    value={signIn.description}
                    onChange={handleDescriptionChange}
                />
            </div>
        </div>
    )
}