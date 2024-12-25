import "./Expenses.css"
import {BasicComponentChild} from "../../Components/BasicComponentChart/BasicComponentChild.tsx";
import {WholeCalendar} from "../../Components/CalendarComponents/WholeCalendar.tsx";
import {BasicPieChart, defaultPieData} from "../../chart/PieChart/BasicPieChart.tsx";
import {BasicBarChart, defaultData} from "../../chart/BarChart/BasicBarChart.tsx";
import {BasicChart} from "../../chart/BasicChart/BasicChart.tsx";

const Expenses = () => {
    return (
        <>
            <section className="Expenses">
                <section className="Expenses-top">
                    <BasicComponentChild
                        className="expenses-circle-chart child-expenses child-default-comp"
                        title="Gastos Por Mes"
                    >
                        <BasicPieChart data={defaultPieData}/>
                    </BasicComponentChild>
                    <BasicComponentChild className="expenses-calendar child-expenses child-default-comp">
                        <WholeCalendar/>
                    </BasicComponentChild>
                </section>
                <section className="Expenses-bot">
                    <BasicComponentChild className="expenses-table child-expenses child-default-comp" title="Gastos más altos">
                        <BasicBarChart data={defaultData}/>
                    </BasicComponentChild>
                    <BasicComponentChild className="expenses-feelings-chart child-expenses child-default-comp" title="Emociones por día">
                        <BasicChart data={defaultData}/>
                    </BasicComponentChild>
                </section>
            </section>
        </>
    )
}

export default Expenses;