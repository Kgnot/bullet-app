import "./InputItems.css"

interface InputItemsProps {
    placeholder: string;
    item: string;
    parentMethod: () => void
    setNewItem: (newItem: string) => void;

}

export const InputItems = ({placeholder,item,setNewItem,parentMethod}:InputItemsProps) => {
    return (
        <div className="income-input">
            <input
                type="text"
                placeholder={placeholder}
                value={item}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={parentMethod}>Añadir</button>
        </div>
    )
}