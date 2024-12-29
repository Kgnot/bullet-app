import "./BoxProfile.css"

interface BoxProfileProps {
    className?: string;
}

export const BoxProfile = ({className}:BoxProfileProps) => {
    return (
        <div className={`BoxProfile ${className}`}>
            <h3>Editar Perfil</h3>
            <div className="BoxProfile_img_edit">
                <img src="./avatars/deer.jpg" alt="perfil defecto"/>
                <button> Cambiar Imagen </button>
            </div>
            <div className="BoxProfile_desc_container">
                <p>Descripción: </p>
                <textarea name="descripcion" rows={5} ></textarea>
            </div>
        </div>
    )
}