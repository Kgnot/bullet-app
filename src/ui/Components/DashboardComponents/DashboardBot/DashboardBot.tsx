import {BasicChart} from "../../../chart/BasicChart/BasicChart";
import {CommonChart} from "../../../../chart__scripts/ChartTypes.ts";
import {BasicComponentChild} from "../../BasicComponentChart/BasicComponentChild.tsx";
import {BasicBarChart} from "../../../chart/BarChart/BasicBarChart.tsx";
import {BasicRadarChart} from "../../../chart/RadarChart/BasicRadarChart.tsx";
import {DogComponent} from "../../../3D__Component/DogComponent.tsx";

const DashboardBot = () => {

    const data: CommonChart = {
        types: ['line1', 'line2'],
        data: [
            {
                "name": "page1",
                "line1": 10100,
                "line2": 9000,
            }, {
                "name": "page2",
                "line1": 1000,
                "line2": 12000,
            }, {
                "name": "page3",
                "line1": 4500,
                "line2": 7000,
            }, {
                "name": "page4",
                "line1": 10000,
                "line2": 5000,
            },
            {
                "name": "page5",
                "line1": 10000,
                "line2": 5000,
            }
        ]
    };


    return (
        <div className="dashboard-bot">
            {" "}
            <div className="dashboard-bot-left">
                <BasicComponentChild
                    className="dashboard-bot-left-top  child-default-comp"
                    title="Gastos Necesarios vs Innecesarios"
                >
                    <BasicBarChart data={data}/>
                </BasicComponentChild>
                <div className="dashboard-bot-left-bot  child-default-comp">
                    <DogComponent/>
                </div>
            </div>
            <div className="dashboard-bot-right">
                <BasicComponentChild
                    className="dashboard-bot-right-top  child-default-comp"
                    title="Animo Por meses en gastos"
                >
                    <BasicChart data={data}/>
                </BasicComponentChild>
                <BasicComponentChild className="dashboard-bot-right-bot child-default-comp" title="Método más usado">
                    <BasicRadarChart
                        data={data}
                    />
                </BasicComponentChild>
            </div>
        </div>
    );
}

export default DashboardBot;