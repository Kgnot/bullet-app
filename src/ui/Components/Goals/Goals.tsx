import './Goals.css'
import {GoalItem} from "../GoalItem/GoalItem.tsx";
import {GoalSVG} from "../../svg/component/GoalSVG.tsx";

interface GoalsProps{
    className?:string;
    items:Array<string>;
}


export const Goals = ({className, items}:GoalsProps) => {
    return (
        <>
            <div className={`goal ${className}`}>
                    <div className="goal__header">
                        <h1> <GoalSVG width={25}/> Objetivos actuales </h1>
                    </div>
                    <div className="goal__body">
                        {items.map((item) => {
                            return <GoalItem item={item}></GoalItem>;
                        })}
                    </div>
            </div>
        </>
    )
}