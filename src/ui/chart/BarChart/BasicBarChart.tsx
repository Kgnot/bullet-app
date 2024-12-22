import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {CommonChart} from "../../../chart__scripts/ChartTypes.ts";
import {getRandomPastelColor, } from "../../../scripts/randomColor.ts";
//getRandomColor
interface BasicBarChart{
    data:CommonChart;
}


export const BasicBarChart = ({data}:BasicBarChart) => {

    return (
        <>
            <ResponsiveContainer>
                <BarChart data={data.data}>
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {data.types.map((type) =>{
                        return (
                            <>
                                <Bar dataKey={type} fill={getRandomPastelColor()} />
                            </>
                        )
                    })}

                </BarChart>
            </ResponsiveContainer>
        </>
    )
}