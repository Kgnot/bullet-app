import './Dashboard.css'

export const Dashboard = () => {
    return (
        <section className="Dashboard">
            <div className="dashboard-top"> {/* Apartado para arriba*/}
                <div className="dashboard-top-left"> {/* top - izq*/}
                    <div className="dashboard-top-left-top child-default-comp">

                    </div>
                    <div className="dashboard-top-left-bot">
                        <div className="dashboard-top-left-bot-left  child-default-comp">

                        </div>
                        <div className="dashboard-top-left-bot-right  child-default-comp">

                        </div>
                    </div>
                </div>
                <div className="dashboard-top-right"> {/* top - der*/}
                    <div className="dashboard-top-right-top  child-default-comp">

                    </div>
                    <div className="dashboard-top-right-bot  child-default-comp">

                    </div>
                </div>
            </div>
            <div className="dashboard-bot"> {/* Apartado para abajo*/}
                <div className="dashboard-bot-left">
                    <div  className="dashboard-bot-left-top  child-default-comp">

                    </div>
                    <div  className="dashboard-bot-left-bot  child-default-comp">

                    </div>
                </div>
                <div className="dashboard-bot-right">
                    <div className="dashboard-bot-right-top  child-default-comp">

                    </div>
                    <div className="dashboard-bot-right-center  child-default-comp">

                    </div>
                    <div className="dashboard-bot-right-bot child-default-comp">

                    </div>
                </div>
            </div>
        </section>
    )
}