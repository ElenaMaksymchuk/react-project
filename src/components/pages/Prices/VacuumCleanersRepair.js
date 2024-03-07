import React from "react";
import { useState, useEffect } from "react";
import PricesMessage from "./PricesMessage";

function VacuumCleanersRepair() {
    document.title = "Ремонт пилососів";
    const [filteredRepairTypes, setFilteredRepairTypes] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        fetch("http://127.0.0.1:8000/api/type_repair")
            .then((response) => response.json())
            .then((json) => {
                const filteredResults = json.filter(repairType => repairType.category_id === 4);
                setFilteredRepairTypes(filteredResults);
            });
    }, []);
    return (
        <div>
            <div className="categoryInfo">
                <h3>Ремонт пилососів</h3>
                <table className="customTable">
                    <thead>
                        <tr>
                            <th>Вид послуги</th>
                            <th>Ціна, грн.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRepairTypes.map((repairType) => (
                            <tr key={repairType.id}>
                                <td>{repairType.type}</td>
                                <td>{repairType.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <PricesMessage />
        </div>
    );
}

export default VacuumCleanersRepair;