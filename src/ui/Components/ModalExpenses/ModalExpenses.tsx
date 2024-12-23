export const ModalExpenses = () => {
    return (
        <>
            <div>
                <h3>Agregar Gastos</h3>
                <p>Ingresa los detalles del gasto aquí. Haz clic en guardar cuando hayas terminado. </p>
                <form action="">
                    <label> Cantidad :</label>
                    <input type="text" name="quantity" id="quantity" />
                </form>
            </div>
        </>
    )
}