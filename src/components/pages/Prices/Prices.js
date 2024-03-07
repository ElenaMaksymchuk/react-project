import { Route, Routes } from "react-router-dom";
import CustomLink from "../../../elements/CustomLink/CustomLink";
import PricesContent from "./PricesContent";
import PhonesRepair from "./PhonesRepair";
import ComputersRepair from "./ComputersRepair";
import MonitorsRepair from "./MonitorsRepair";
import VacuumCleanersRepair from "./VacuumCleanersRepair";
import RefrigeratorsRepair from "./RefrigeratorsRepair";
import TelevisionsRepair from "./TelevisionsRepair";
import BreadOvensRepair from "./BreadOvensRepair";
import "./Prices.css"

function Prices() {
    document.title = "Вартість послуг";
    return (
        <main>
            <h3>Вартість послуг</h3>
            <div className="categories">
                <div className="categoriesMenu">
                    <CustomLink to="phonesrepair" className="categoryMenuLink" text="Ремонт телефонів" />
                    <CustomLink to="computersrepair" className="categoryMenuLink" text="Ремонт комп'ютерів" />
                    <CustomLink to="monitorsrepair" className="categoryMenuLink" text="Ремонт моніторів" />
                    <CustomLink to="vacuumcleanersrepair" className="categoryMenuLink" text="Ремонт пилососів" />
                    <CustomLink to="refrigeratorsrepair" className="categoryMenuLink" text="Ремонт холодильників" />
                    <CustomLink to="televisionsrepair" className="categoryMenuLink" text="Ремонт телевізорів" />
                    <CustomLink to="breadovensrepair" className="categoryMenuLink" text="Ремонт хлібопічок" />
                </div>
                <div className="categoryContent">
                    <Routes>
                        <Route path="/" element={<PricesContent />} />
                        <Route path="phonesrepair" element={<PhonesRepair />} />
                        <Route path="computersrepair" element={<ComputersRepair />} />
                        <Route path="monitorsrepair" element={<MonitorsRepair />} />
                        <Route path="vacuumcleanersrepair" element={<VacuumCleanersRepair />} />
                        <Route path="refrigeratorsrepair" element={<RefrigeratorsRepair />} />
                        <Route path="televisionsrepair" element={<TelevisionsRepair />} />
                        <Route path="breadovensrepair" element={<BreadOvensRepair />} /> 
                    </Routes>
                </div>
            </div >
        </main>

    )
}

export default Prices;