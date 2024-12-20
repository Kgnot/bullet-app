import "./ProfileImage.css"

export const ProfileImage = () => {

    // Aquí iria un fetch a el nomreb y correo de la persona xd


    return (
        <>
            <div className="profileImage">
                <img src="/perfil.avif" alt="xd" />
                <div>
                    <h3>Nombre de Usuario</h3>
                    <p>Correo Electrónico</p>
                </div>
            
            </div>
        </>
    )
}