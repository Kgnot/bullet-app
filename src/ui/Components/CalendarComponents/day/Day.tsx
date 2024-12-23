import "./Day.css"

interface DayProps {
    num: number;
    children?: number;
}

type Pos = { x: number, y: number };


export const Day = ({num, children = 0}: DayProps) => {

    const grads: number = 360;
    const vertex = grads / children;
    const childExist:boolean = children === 0;

    const positionVertexDiv = (): Pos[] => {
        const positions: Pos[] = [];
        for (let i = 0; i < grads; i += vertex) {
            const angle = (i * Math.PI) / 180; // Convertir a radianes
            const x = 50 + 40 * Math.cos(angle); // 50% como centro + radio ajustado (40)
            const y = 50 + 40 * Math.sin(angle);
            positions.push({ x, y });
        }
        return positions;
    };
    return (
        <>
            <div className="day">
                <p className="day__num">{num}</p>
                {!childExist && <div className="day__props">
                    {positionVertexDiv().map((pos, index) => (
                        <div
                            key={index}
                            className="day__items"
                            style={{
                                position: "absolute",
                                top: `${pos.y}%`,
                                left: `${pos.x}%`,
                                transform: "translate(-50%, -50%)", // Ajuste al centro del punto
                            }}
                        ></div>
                    ))}
                </div>}
            </div>
        </>
    )
}