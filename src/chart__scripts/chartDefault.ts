import { ChartTypeRegistry, ChartConfiguration } from "chart.js/auto";


export interface DataChart {
    labels: string[]; // apartados de la X
    datasets: DataSet[];
}

export interface DataSet {
    label: string;
    data: number[];
    yAxisId: string;
}

// para la construcción de un grafico requiero en el constructor: (type,title,data)

export class ChartDefault {
    type: keyof ChartTypeRegistry;
    data: DataChart;
    title: string;

    constructor(type: keyof ChartTypeRegistry, title:string, data: DataChart) {
        this.data = data;
        this.type = type;
        this.title = title;
    }

    config(): ChartConfiguration<keyof ChartTypeRegistry, number[], string> {
        return (
            {
                type: this.type,
                data:this.data,
                options: {
                    animation:false,
                    interaction: {
                        mode: "index",
                        intersect: false,
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: this.title,
                        },
                    },
                    scales: {
                        y: {
                            type: "linear",
                            display: true,
                            position: "left",
                        },
                        y1: {
                            type: "linear",
                            display: true,
                            position: "right",
                            grid: {
                                drawOnChartArea: false,
                            },
                        },
                    },
                },
            }
        )
    }


}
