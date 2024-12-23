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

export const defaultData: CommonChart = {
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