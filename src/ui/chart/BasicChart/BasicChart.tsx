import { useEffect, useRef } from "react";
import Chart, { ChartTypeRegistry } from "chart.js/auto";
import {ChartDefault, DataChart, DataSet} from "../../../chart__scripts/chartDefault.ts";

interface BasicChartProps {
    className?: string;
    type: keyof ChartTypeRegistry;
    chartName: string;
    dataSets: DataSet[],
}

const labels = ["enero", "febrero", "2012", "2013", "2014", "2015", "2016"];


export const BasicChart = ({ className, type,chartName,dataSets}: BasicChartProps) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstanceRef = useRef<Chart | null>(null); // Referencia al gráfico

    const data:DataChart = {
        labels:labels,
        datasets: dataSets
    }

    const chart = new ChartDefault(type,chartName,data);

    useEffect(() => {
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }
        if (chartRef.current) {
            chartInstanceRef.current = new Chart(chartRef.current, chart.config());
        }
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [chart, dataSets]);

    return (
        <div className={className}>
            <canvas ref={chartRef} />
        </div>
    );
};
