import {CommonPieChart} from "../../../chart__scripts/ChartTypes.ts";
import {Pie, PieChart, Tooltip, ResponsiveContainer, Legend, Cell,} from "recharts";

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


// eslint-disable-next-line react-refresh/only-export-components
export const defaultPieData: CommonPieChart = {
    data: [
        {
            "name": "Compras pequeñas",
            "value": 120400,
            "color": "#A8DADC" // Verde-azulado pastel
        },
        {
            "name": "Transporte",
            "value": 65000,
            "color": "#F4A261" // Naranja suave pastel
        },
        {
            "name": "Almuerzos",
            "value": 130800,
            "color": "#81B29A" // Verde pastel
        },
        {
            "name": "Regalos",
            "value": 15000,
            "color": "#E9C46A" // Amarillo pastel cálido
        },
    ]
};
