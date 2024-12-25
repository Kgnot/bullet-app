import "./Calendar.css"
import {MonthMethods, MonthName, PaddingDays} from "../../../../../scripts/monthMethods.ts";
import {Day} from "../day/Day.tsx";
import {useState} from "react";
import {ButtonChange} from "../../../utils/ButtonChangeMonth/ButtonChange";

interface CalendarProps {
    className: string;
}


export const Calendar = ({className}:CalendarProps) => {
    const currentMonth = new Date().getMonth()+1;
    const currentYear = new Date().getFullYear();
    const [month, setMonth] = useState(currentMonth);
    const [year, setYear] = useState(currentYear);

    const changeMonth = (type: number) => {
        const newMonth = month + type;
        if (newMonth === 13) {
            setMonth(1);
            setYear(year + 1);
        } else if (newMonth === 0) {
            setMonth(12);
            setYear(year - 1);
        } else {
            setMonth(newMonth);
        }
    };

    const quantityDays: number = MonthMethods(month, year);
    const paddingDays: number = PaddingDays(month, year);
    const monthName = MonthName(month);

    return (
        <>
            <div className={`calendar ${className}`}>
                <div className="calendar__name">{monthName}  - {year} <ButtonChange parentMethod={changeMonth}/> </div>
                <div className="calendar__week"></div>
                <div className="calendar__days_holder">
                    {paddingDays > 0 &&
                        Array.from({length: paddingDays}).map((_, index) => {
                            return <div key={`padding-${index}`} className="padding_days_calendar"></div>;
                        })
                    }
                    {Array.from({length: quantityDays}).map((_, index) => {
                        return <Day key={index} num={index + 1}/>;
                    })}

                </div>
            </div>

        </>
    )
}
