import {BasicChart} from "../../../chart/BasicChart/BasicChart";
import {BasicComponentChild} from "../../BasicComponentChart/BasicComponentChild.tsx";
import {BasicBarChart, defaultData} from "../../../chart/BarChart/BasicBarChart.tsx";
import {BasicRadarChart} from "../../../chart/RadarChart/BasicRadarChart.tsx";

const DashboardBot = () => {




    return (
        <div className="dashboard-bot">
            {" "}
            <div className="dashboard-bot-left">
                <BasicComponentChild
                    className="dashboard-bot-left-top  child-default-comp"
                    title="Gastos Necesarios vs Innecesarios"
                >
                    <BasicBarChart data={defaultData}/>
                </BasicComponentChild>
                <div className="dashboard-bot-left-bot  child-default-comp">
                </div>
            </div>
            <div className="dashboard-bot-right">
                <BasicComponentChild
                    className="dashboard-bot-right-top  child-default-comp"
                    title="Animo Por meses en gastos"
                >
                    <BasicChart data={defaultData}/>
                </BasicComponentChild>
                <BasicComponentChild className="dashboard-bot-right-bot child-default-comp" title="Método más usado">
                    <BasicRadarChart
                        data={defaultData}
                    />
                </BasicComponentChild>
            </div>
        </div>
    );
}

export default DashboardBot;