export interface CommonChart {
    types: string[];
    data: object[];
}
//https://recharts.org/en-US/api/PieChart
export interface CommonPieChart{
    data:{ name: string; value: number; color?:string }[];
}
//
export interface CommonRadarChart{
    data:object[]; // El objeto debe ser: {subject:string,caso1:number,caso2:number}
}
