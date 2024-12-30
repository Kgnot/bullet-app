import "./ListItem.css"

interface ListItemsProps {
    list:string[];
    className?: string;
    parentMethod: (index:number)=> void;
}


export const ListItems = ({list,className,parentMethod}:ListItemsProps) => {
    return (
        <div className={`default-list ${className}`}>
            {list.map((income, index) => (
                <div key={index} className="income-card">
                    <span>{income}</span>
                    <button onClick={() => parentMethod(index)}>Eliminar</button>
                </div>
            ))}
        </div>
    )
}