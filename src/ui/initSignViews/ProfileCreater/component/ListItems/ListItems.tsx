import "./ListItem.css"
import {Expenses, Incomes} from "../../../../../entities";

interface ListItemsProps {
    list:Expenses[]|Incomes[];
    className?: string;
    parentMethod: (index:number)=> void;
}


export const ListItems = ({list,className,parentMethod}:ListItemsProps) => {
    return (
        <div className={`default-list ${className}`}>
            {list.map((item, index) => (
                <div key={index} className="default-card">
                    <span>{item.type}</span>
                    <button onClick={() => parentMethod(index)}>X</button>
                </div>
            ))}
        </div>
    )
}