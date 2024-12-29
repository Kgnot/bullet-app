

export const IncomesConfig = () =>{

    const incomesList =
        [{
            source: "Expenses",
            amount: 1500
        }, {
            source: "Expenses",
            amount: 1500
        }];

    return (
        <>
            <div className="config-card">
                <h2>Fuentes de Ingreso</h2>
                <div className="income-item">
                    <input type="text" placeholder="Fuente de Ingreso"/>
                    <input type="number" placeholder="Monto Mensual"/>
                    <button>Añadir</button>
                </div>
                {/* Lista de fuentes de ingreso */}
                <ul>
                    {incomesList.map((income, index) => (
                        <li key={index}>
                            {income.source} - {income.amount}
                            <button>Edit</button>
                            <button>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}