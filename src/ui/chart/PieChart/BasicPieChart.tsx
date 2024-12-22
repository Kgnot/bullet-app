import {CommonPieChart} from "../../../chart__scripts/ChartTypes.ts";
import {Pie, PieChart,Tooltip, ResponsiveContainer, Legend, Cell,} from "recharts";

interface BasicChartProps {
    data: CommonPieChart;
}

export const BasicPieChart = ({data}: BasicChartProps) => {
    return (
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Tooltip/>
                    <Legend/>
                    <Pie
                        data={data.data}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={80}
                        labelLine={true}
                        isAnimationActive={true}
                        cursor={'pointer'}
                    >
                        {/* Colores personalizados para cada sector */}
                        {data.data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color}/>
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
    );
};
