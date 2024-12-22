import {Legend,RadarChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, ResponsiveContainer} from "recharts";
import {CommonChart} from "../../../chart__scripts/ChartTypes.ts";
import {getRandomPastelColor} from "../../../scripts/randomColor.ts";


interface BasicChartProps {
    data: CommonChart;
}


export const BasicRadarChart = ({data}: BasicChartProps) => {
    let color:string = "";
    return (
        <>
            <ResponsiveContainer>
                <RadarChart outerRadius={90} data={data.data}>
                    <PolarGrid/>
                    <PolarAngleAxis dataKey="name"/>
                    <PolarRadiusAxis angle={30} domain={[0, 150]}/>
                    {data.types.map((type) => {
                        return (
                            <>
                                {color = getRandomPastelColor()}
                                <Radar dataKey={type} stroke={color} fill={color}
                                       fillOpacity={0.6}/>                            </>
                        )
                    })}
                    <Legend/>

                </RadarChart>
            </ResponsiveContainer>
        </>
    )
}