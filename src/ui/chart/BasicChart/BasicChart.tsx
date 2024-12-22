import "./BasicChart.css"
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer,} from "recharts";
import {CommonChart} from "../../../chart__scripts/ChartTypes.ts";

interface BasicChartProps {
    data: CommonChart;
}

export const BasicChart = ({data}: BasicChartProps) => {
    return (
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.data}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                    <XAxis dataKey={"name"}/>
                    <YAxis/>
                    <Tooltip/>
                    {data.types.map((line) =>{
                        return (
                            <>
                                <Line type="monotone" dataKey={line} stroke="#8884d8" />
                            </>
                        )
                    } )}
                </LineChart>
            </ResponsiveContainer>
    );
};
