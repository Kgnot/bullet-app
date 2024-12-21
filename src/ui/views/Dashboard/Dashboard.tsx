import './Dashboard.css'
import {BasicChart} from "../../chart/BasicChart/BasicChart.tsx";
import {DataSet} from "../../../chart__scripts/chartDefault.ts";

export const Dashboard = () => {

    const datasets: DataSet[] = [
        {
            label: "Ingresos",
            data: [100, 20, 200, 250, 300, 350, 400], // Datos de ingresos
            yAxisId: "ingresos",
        },
        {
            label: "gastos",
            data: [50, 80, 120, 160, 200, 250, 300], // Datos de egresos
            yAxisId: "gastos",
        },
    ];


    return (
        <section className="Dashboard">
            <div className="dashboard-top"> {/* Apartado para arriba*/}
                <div className="dashboard-top-left"> {/* top - izq*/}
                    <BasicChart
                        className="dashboard-top-left-top child-default-comp"
                        type="line"
                        chartName="Ingresos y Egresos netos"
                        dataSets={datasets}
                    />
                    <div className="dashboard-top-left-bot">
                        <div className="dashboard-top-left-bot-left  child-default-comp">
                        </div>
                        <div className="dashboard-top-left-bot-right  child-default-comp">

                        </div>
                    </div>
                </div>
                <div className="dashboard-top-right"> {/* top - der*/}
                    <BasicChart 
                    className="dashboard-top-right-top  child-default-comp"
                    type="pie"
                    chartName="Ingresos y Egresos netos"
                    dataSets={datasets}
                    >

                    </BasicChart>
                    <div className="dashboard-top-right-bot  child-default-comp">

                    </div>
                </div>
            </div>
            <div className="dashboard-bot"> {/* Apartado para abajo*/}
                <div className="dashboard-bot-left">
                    <BasicChart className="dashboard-bot-left-top  child-default-comp"
                     type={'bar'} 
                     chartName={''} 
                     dataSets={datasets}>

                    </BasicChart>
                    <div className="dashboard-bot-left-bot  child-default-comp">

                    </div>
                </div>
                <div className="dashboard-bot-right">
                    <BasicChart className="dashboard-bot-right-top  child-default-comp" 
                    type={'bar'} 
                    chartName={'Emociones por mes'} 
                    dataSets={datasets}>

                    </BasicChart>
                    <div className="dashboard-bot-right-bot child-default-comp">
                        Eeee haz usado mas tu pija para pagar saludos
                    </div>
                </div>
            </div>
        </section>
    )
}