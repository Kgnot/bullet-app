import "./ExpensesConfig.css"

export const ExpensesConfig = () => {
    const expensesList =
        [{
            name: "Expenses",
            amount: 1500
        }, {
            name: "Expenses",
            amount: 1500
        }];

    return (
        <>
            <div className="config-card">
                <h2>Tipos de Gastos</h2>
                <div className="expense-item">
                    <input type="text" placeholder="Nombre del Gasto"/>
                    <input type="number" placeholder="Monto"/>
                    <button>Añadir</button>
                </div>
                {/* Lista de tipos de gastos */}
                <ul>
                    {expensesList.map((expense, index) => (
                        <li key={index}>
                            {expense.name} - {expense.amount}
                            <button>Edit</button>
                            <button>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}