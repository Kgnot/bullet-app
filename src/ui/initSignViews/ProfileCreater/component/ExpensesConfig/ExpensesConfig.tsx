import "./ExpensesConfig.css"
import {useState} from "react";
import {InputItems} from "../InputItems/InputItems.tsx";
import {ListItems} from "../ListItems/ListItems.tsx";
import {useSignIn} from "../../../../../state/useSignIn.ts";
import {Expenses} from "../../../../../entities";

export const ExpensesConfig = () => {
    const { signIn, addExpense, deleteExpense } = useSignIn();
    const [newExpenseType, setNewExpenseType] = useState("");

    const handleAddExpense = () => {
        if (newExpenseType.trim()) {
            const newExpense: Expenses = {
                type: newExpenseType,
            };
            addExpense(newExpense);
            setNewExpenseType("");
        }
    };

    const handleDeleteExpense = (expenseId: number) => {
        deleteExpense(expenseId);
    };

    return (
        <div className="config-card">
            <h2>Fuentes de Gastos</h2>
            <InputItems
                placeholder="Agrega un nuevo Gasto"
                item={newExpenseType}
                setNewItem={setNewExpenseType}
                parentMethod={handleAddExpense}
            />
            <ListItems
                list={signIn.expenses}
                parentMethod={handleDeleteExpense}
            />
        </div>
    );
};
