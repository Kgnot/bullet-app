import "./ExpensesConfig.css"
import {useState} from "react";
import {InputItems} from "../InputItems/InputItems.tsx";
import {ListItems} from "../ListItems/ListItems.tsx";

export const ExpensesConfig = () => {
    const [expensesList, setExpensesList] = useState<string[]>([]);
    const [newExpense, setNewExpense] = useState("");

    const addExpense = () => {
        if (newExpense.trim()) {
            setExpensesList([...expensesList, newExpense]);
            setNewExpense("");
        }
    };

    const deleteExpenses = (index: number) => {
        const updatedList = expensesList.filter((_, i) => i !== index);
        setExpensesList(updatedList);
    };

    return (
        <div className="config-card">
            <h2>Fuentes de Gastos</h2>
            <InputItems
                placeholder="Agrege un nuevo Gasto"
                item={newExpense}
                setNewItem={setNewExpense}
                parentMethod={addExpense} />
            {/* Lista de fuentes de ingreso */}
            <ListItems list={expensesList} parentMethod={deleteExpenses}/>
        </div>
    );
};