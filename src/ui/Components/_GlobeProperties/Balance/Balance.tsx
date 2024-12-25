import "./Balance.css"



export const Balance = () => {
    return(
        <>
            <div className="balance">
                <div className="balance_total balance_child">
                    <h3> Total </h3>
                    <p> 150000</p>
                </div>
                <hr/>
                <div className="balance_incomes balance_child">
                    <h3> Ingresos </h3>
                    <p> 150000</p>
                </div>
                <hr/>
                <div className="balance_expenses balance_child">
                    <h3> Gastos </h3>
                    <p> 150000</p>
                </div>
            </div>
        </>
    )
}