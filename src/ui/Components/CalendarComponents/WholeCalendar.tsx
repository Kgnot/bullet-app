import {Calendar} from "./Components/Calendar/Calendar.tsx";
import "./WholeCalendar.css"

export const WholeCalendar = () => {
    return (
        <>
            <div className="wholeCalendar">
                <Calendar className="wholeCalendar-c"/>
                <div className="imageCalendar">
                    <img src="./bird.avif" alt=""/>
                </div>
            </div>

        </>
    )
}