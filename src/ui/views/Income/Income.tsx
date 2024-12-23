import './Income.css'
import {BasicComponentChild} from "../../Components/BasicComponentChart/BasicComponentChild.tsx";
import {BasicTable} from "../../table/BasicTable/BasicTable.tsx";
import {BasicChart} from "../../chart/BasicChart/BasicChart.tsx";
import {defaultData} from "../../chart/BarChart/BasicBarChart.tsx";


export const Income = () => {
    return (
        <>
            <section className="Income">
                <div className="income-top">
                    <BasicComponentChild
                        className="income-top-left child-default-comp  child-income"
                        title="Ingresos Periodicos"
                    >
                        <BasicTable/>
                    </BasicComponentChild>
                    <div className="income-top-right">
                        <BasicComponentChild
                            className="income-top-right-top child-default-comp child-income"
                            title="Proyecciones de Ingresos"
                        >
                            <BasicChart data={defaultData}/>
                        </BasicComponentChild>
                        <BasicComponentChild className="income-top-right-bot child-default-comp child-income">
                            Aqui muestro que se percibe del grafico puede ser un pdf o algo asi
                        </BasicComponentChild>
                    </div>
                </div>
                <div className="income-bot">
                    <div className="income-bot-left child-default-comp child-income">
                        <h3>Agregar Ingreso</h3>
                        <form className="income-form">
                            <input
                                type="text"
                                name="description"
                                placeholder="Descripción"
                                required
                            />
                            <input
                                type="number"
                                name="amount"
                                placeholder="Monto"
                                step="0.01"
                                required
                            />
                            <input
                                type="date"
                                name="date"
                                required
                            />
                            <select name="category" required>
                                <option value="">Seleccionar Categoría</option>
                                <option value="fijo">Fijo</option>
                                <option value="variable">Variable</option>
                            </select>
                            <button type="submit">Agregar</button>
                        </form>
                        <div className="income-list">
                            <h4>Últimos ingresos añadidos:</h4>
                        </div>
                    </div>
                    <BasicComponentChild
                        className="income-bot-right child-default-comp child-income"
                        title="Ultimos ingresos no periodicos"
                    >
                        <BasicTable/>
                    </BasicComponentChild>
                </div>
            </section>
        </>
    )
}

export default Income;