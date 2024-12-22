import {BasicPieChart} from "../../../chart/PieChart/BasicPieChart.tsx";
import {CommonChart, CommonPieChart} from "../../../../chart__scripts/ChartTypes.ts";
import {BasicChart} from "../../../chart/BasicChart/BasicChart.tsx";
import {BasicComponentChild} from "../../BasicComponentChart/BasicComponentChild.tsx";
import {BasicTable} from "../../../table/BasicTable/BasicTable.tsx";

const DashboardTop = () => {

    const data: CommonPieChart = {
        data: [
            {
                "name": "Compras pequeñas",
                "value": 120400,
                "color": "#4a8ea9"
            },
            {
                "name": "Transporte",
                "value": 65000,
                "color": "#93122f"
            },
            {
                "name": "Almuerzos",
                "value": 130800,
                "color": "#53a16b"
            },
            {
                "name": "Regalos",
                "value": 15000,
                "color": "#76248d"
            },
        ]
    }
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
                    {/*<div className="dashboard-top-left-bot-right  child-default-comp"></div>*/}
                </div>
            </div>
            <div className="dashboard-top-right">
                {" "}
                <BasicComponentChild
                    title="GASTOS"
                    className="dashboard-top-right-top  child-default-comp"
                > <BasicPieChart data={data}/>
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