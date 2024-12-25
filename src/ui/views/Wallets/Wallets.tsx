import "./Wallets.css"
import {defaultData} from "../../chart/BarChart/BasicBarChart.tsx";
import {BasicChart} from "../../chart/BasicChart/BasicChart.tsx";
import {BasicComponentChild} from "../../Components/BasicComponentChart/BasicComponentChild.tsx";
import {BasicTable} from "../../table/BasicTable/BasicTable.tsx";
import {Wallet} from "../../Components/Wallet/Wallet.tsx";


const Wallets = () => {
    return (
        <div className="wallets">
            <h1> Billeteras </h1>
            <div className="wallet-top">
                <BasicComponentChild className="wallet-top-left child-default-comp">
                    <Wallet/>
                </BasicComponentChild>
                <BasicComponentChild className="wallet-top-right child-default-comp" title="Gastos vs Ingresos ">
                    <BasicChart data={defaultData}/>
                </BasicComponentChild>
            </div>
            <div className="wallet-bot">
                <BasicComponentChild className="wallet-bot-left child-default-comp" title="Más Ingresos">
                    <BasicTable></BasicTable>
                </BasicComponentChild>
                <BasicComponentChild className="wallet-bot-right child-default-comp" title="Más Gastos">
                    <BasicTable></BasicTable>
                </BasicComponentChild>
            </div>

        </div>
    )
}


export default Wallets;