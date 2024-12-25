import {BasicPieChart, defaultPieData} from "../../../chart/PieChart/BasicPieChart.tsx";
import {CommonChart, CommonPieChart} from "../../../../chart__scripts/ChartTypes.ts";
import {BasicChart} from "../../../chart/BasicChart/BasicChart.tsx";
import {BasicComponentChild} from "../../BasicComponentChart/BasicComponentChild.tsx";
import {BasicTable} from "../../../table/BasicTable/BasicTable.tsx";
import {ButtonChange} from "../../utils/ButtonChangeMonth/ButtonChange.tsx";

const DashboardTop = () => {

    const data: CommonPieChart = defaultPieData;
    const data2: CommonChart = {
        types: ['line1', 'line2', 'line3', 'line4', 'line5', 'line6'],
        data: [
            {
                "name": "page1",
                "line1": 100,
                "line2": 100,
                "line3": 100,
                "line4": 100,
                "line5": 100,
                "line6": 100,
            }, {
                "name": "page2",
                "line1": 1000,
                "line2": 3100,
                "line3": 4200,
                "line4": 3500,
                "line5": 2000,
                "line6": 1020,
            }, {
                "name": "page3",
                "line1": 1200,
                "line2": 1500,
                "line3": 1000,
                "line4": 200,
                "line5": 400,
                "line6": 100,
            }, {
                "name": "page4",
                "line1": 100,
                "line2": 500,
                "line3": 100,
                "line4": 100,
                "line5": 700,
                "line6": 100,
            }
        ]
    };

    return (
        <div className="dashboard-top">
            {" "}
            <div className="dashboard-top-left">
                {" "}
                <BasicComponentChild
                    className="dashboard-top-left-top child-default-comp"
                    title="Gastos vs Ingresos (anual)"
                >
                    <BasicChart
                        data={data2}/>
                </BasicComponentChild>
                <div className="dashboard-top-left-bot">
                    <BasicComponentChild
                        className="dashboard-top-left-bot-left  child-default-comp"
                        title="Mayor Ingreso"
                    >
                        <BasicTable/>
                    </BasicComponentChild>
                    <BasicComponentChild
                        className="dashboard-top-left-bot-right  child-default-comp"
                        title="Mayor Gasto"
                    >
                        <BasicTable/>
                    </BasicComponentChild>
                </div>
            </div>
            <div className="dashboard-top-right">
                {" "}
                <BasicComponentChild
                    title="GASTOS"
                    className="dashboard-top-right-top  child-default-comp"
                > <BasicPieChart data={data}/>
                    <ButtonChange parentMethod={()=>{}}/>
                </BasicComponentChild>

                <div className="dashboard-top-right-bot  child-default-comp">
                    <h1>Aqui colocaré el cómo te sientes</h1>
                    <p>Te haz zentido de la verga comprando</p>
                </div>
            </div>
        </div>
    );
}

export default DashboardTop;