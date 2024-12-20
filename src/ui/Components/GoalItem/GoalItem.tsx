import './GoalItem.css'

interface GoalItemProps {
    item: string;
}

export const GoalItem = ({item}: GoalItemProps) => {

    return (
        <>
            <div className="goalItem">
                {item}
            </div>
        </>
    )
}

