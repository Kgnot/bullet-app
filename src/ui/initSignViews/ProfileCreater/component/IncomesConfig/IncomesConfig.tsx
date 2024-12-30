import "./IncomesConfig.css";
import { useState } from "react";
import {ListItems} from "../ListItems/ListItems.tsx";
import {InputItems} from "../InputItems/InputItems.tsx";

export const IncomesConfig = () => {
    const [incomesList, setIncomesList] = useState<string[]>([]);
    const [newIncome, setNewIncome] = useState("");

    const addIncome = () => {
        if (newIncome.trim()) {
            setIncomesList([...incomesList, newIncome]);
            setNewIncome("");
        }
    };

    const deleteIncome = (index: number) => {
        const updatedList = incomesList.filter((_, i) => i !== index);
        setIncomesList(updatedList);
    };

    return (
        <div className="config-card">
            <h2>Fuentes de Ingreso</h2>
            <InputItems
                placeholder="Agrege un nuevo ingreso"
                item={newIncome}
                setNewItem={setNewIncome}
                parentMethod={addIncome} />
            {/* Lista de fuentes de ingreso */}
            <ListItems list={incomesList} parentMethod={deleteIncome}/>
        </div>
    );
};
