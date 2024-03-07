import React from "react";
import AccessoriesMessage from "./AccessoriesMessage";
import AccessoriesInfo from "./AccessoriesInfo";
import Image from "../../../elements/Image/Image";
import image13 from "../../../images/image13.jpg";
import { useEffect } from "react";

function VacuumCleaners() {
    document.title = "Пилососи";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <AccessoriesMessage />
            <div className="categoryInfo">
                <h3>Пилососи</h3>
                <Image src={image13} className={"image3"} />
                <table className="customTable">
                    <thead>
                        <tr>
                            <th>Категорія</th>
                            <th>Модель техніки</th>
                            <th>Номер запчастини</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Акумуляторна батарея</td>
                            <td>VR6270**</td>
                            <td>EAC62218202</td>
                        </tr>
                        <tr>
                            <td>Системний фільтр</td>
                            <td>VK76A01ND.APRQCIS</td>
                            <td>ADQ73573303</td>
                        </tr>
                        <tr>
                            <td>Системний фільтр</td>
                            <td>VK80103HFX</td>
                            <td>MDQ61906205, MDJ49551601</td>
                        </tr>
                        <tr>
                            <td>NZ-51 турбо-щітка (міні) SMOG BLACK</td>
                            <td>VC83201UHAM</td>
                            <td>AGB69504605</td>
                        </tr>   
                        <tr>
                            <td>NZ-64 парова насадка FERRARI RED</td>
                            <td>VK79103HX</td>
                            <td>AGB72911501</td>
                        </tr>   
                        <tr>
                            <td>NZ-68 насадка для м'яких поверхонь (турбо) BLACK NIGHT KRYSTAL</td>
                            <td>VK8810HUV</td>
                            <td>AGB72909511</td>
                        </tr>  
                    </tbody>
                </table>
            </div>
            <AccessoriesInfo />
        </div>
    );
}

export default VacuumCleaners;