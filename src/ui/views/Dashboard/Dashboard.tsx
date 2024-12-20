import './Dashboard.css'

export const Dashboard = () => {
    return (
        <section className="Dashboard">
            <div className="dashboard-top"> {/* Apartado para arriba*/}
                <div className="dashboard-top-left"> {/* top - izq*/}
                    <div className="dashboard-top-left-top child-dashboard">

                    </div>
                    <div className="dashboard-top-left-bot">
                        <div className="dashboard-top-left-bot-left  child-dashboard">

                        </div>
                        <div className="dashboard-top-left-bot-right  child-dashboard">

                        </div>
                    </div>
                </div>
                <div className="dashboard-top-right"> {/* top - der*/}
                    <div className="dashboard-top-right-top  child-dashboard">

                    </div>
                    <div className="dashboard-top-right-bot  child-dashboard">

                    </div>
                </div>
            </div>
            <div className="dashboard-bot"> {/* Apartado para abajo*/}
                <div className="dashboard-bot-left">
                    <div  className="dashboard-bot-left-top  child-dashboard">

                    </div>
                    <div  className="dashboard-bot-left-bot  child-dashboard">

                    </div>
                </div>
                <div className="dashboard-bot-right">
                    <div className="dashboard-bot-right-top  child-dashboard">

                    </div>
                    <div className="dashboard-bot-right-center  child-dashboard">

                    </div>
                    <div className="dashboard-bot-right-bot child-dashboard">

                    </div>
                </div>
            </div>
        </section>
    )
}