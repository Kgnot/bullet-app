import './FastStats.css'
import {CSSProperties} from "react";

interface FastStatsProps{
    className:string;
}


export const FastStats = ({ className }: FastStatsProps) => {
    const progressValue__income: number = 70;
    const progressValue_expenses:number = 10;
    return (
        <>
            <div className={`fastStats ${className}`}>
                <h1>Estadísticas rápidas</h1>
                <div className="fastStats__items">
                    {/* Usa el valor numérico directamente */}
                    <label className="fastStats_label" style={{ "--p": progressValue__income.toString() } as CSSProperties}>
                        Metas de ingresos:
                        <progress value={progressValue__income / 100} />
                    </label>
                    <label className="fastStats_label" style={{ "--p": progressValue_expenses.toString() } as CSSProperties}>
                        Metas de ingresos:
                        <progress value={ progressValue_expenses /100} />
                    </label>
                </div>
            </div>
        </>
    );
};
