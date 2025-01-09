import "./IncomesConfig.css";
import {useState} from "react";
import {ListItems} from "../ListItems/ListItems.tsx";
import {InputItems} from "../InputItems/InputItems.tsx";
import {useSignIn} from "../../../../../state/useSignIn.ts";
import {Expenses} from "../../../../../entities";

export const IncomesConfig = () => {
    const {signIn, addIncome, deleteIncome} = useSignIn();
    const [newIncome, setNewIncome] = useState("");

    const handleAddIncome = () => {
        if (newIncome.trim()) {
            const newExpense: Expenses = {
                type: newIncome,
            };
            addIncome(newExpense);
            setNewIncome("");
        }
    };

    const handleDeleteIncome = (expenseId: number) => {
        deleteIncome(expenseId);
    };

    return (
        <div className="config-card">
            <h2>Fuentes de Ingreso</h2>
            <InputItems
                placeholder="Agrege un nuevo ingreso"
                item={newIncome}
                setNewItem={setNewIncome}
                parentMethod={handleAddIncome}/>
            {/* Lista de fuentes de ingreso */}
            <ListItems list={signIn.incomes} parentMethod={handleDeleteIncome}/>
        </div>
    );
};
