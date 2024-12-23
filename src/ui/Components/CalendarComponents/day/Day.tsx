import "./Day.css"
import {useState} from "react";
import {BackModal} from "../../_BackModal/BackModal.tsx";
import {Modal} from "../../_Modal/Modal.tsx";
import {ModalExpenses} from "../../ModalExpenses/ModalExpenses.tsx";

interface DayProps {
    num: number;
    children?: number;
}

type Pos = { x: number, y: number };


export const Day = ({num, children = 0}: DayProps) => {
    const [modal,setModal] = useState(false);

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

    const handlerClick = () => {
        setModal(true);
    }
    const closeModal = () => {
        setModal(false);
    }


    return (
        <>
            {modal &&
                <><BackModal onClick={closeModal}>
                    <Modal>
                        <ModalExpenses/>
                    </Modal>
                </BackModal>
                </>
            }
            <div className="day" onClick={handlerClick}>
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