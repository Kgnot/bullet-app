import {ExpensesForm} from "../CustomForm";
import "./ModalExpenses.css"

export const ModalExpenses = () => {
    return (
        <>
            <div className="modalExpenses">
                <div>
                    <h3>Agregar Gastos</h3>
                    <p>Ingresa los detalles del gasto aquí. Haz clic en guardar cuando hayas terminado. </p>
                </div>
                <ExpensesForm/>
            </div>
        </>
    )
}