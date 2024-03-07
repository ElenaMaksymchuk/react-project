import React from "react";
import AccessoriesMessage from "./AccessoriesMessage";
import AccessoriesInfo from "./AccessoriesInfo";
import Image from "../../../elements/Image/Image";
import image10 from "../../../images/image10.jpg";
import { useEffect } from "react";

function Monitors() {
    document.title = "Монітори";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <AccessoriesMessage />
            <div className="categoryInfo">
                <h3>Монітори</h3>
                <Image src={image10} className={"image3"} />
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
                            <td>Кабель з'єднувальний</td>
                            <td>43UD79-B.ARUZ</td>
                            <td>EAD63954403</td>
                        </tr>
                        <tr>
                            <td>Кабель з'єднувальний</td>
                            <td>27UK850-W.ARUZ</td>
                            <td>EAD63932603</td>
                        </tr>
                        <tr>
                            <td>Блок живлення</td>
                            <td>32GK650F-B.ADRZ</td>
                            <td>EAY62933010</td>
                        </tr>
                        <tr>
                            <td>Блок живлення</td>
                            <td>24CK550N-3A.AEU	</td>
                            <td>EAY62990913</td>
                        </tr>
                        <tr>
                            <td>Підставка пластикова для монітору</td>
                            <td>49SM8600PLA.ARU	</td>
                            <td>AAN76809630</td>
                        </tr>         
                    </tbody>
                </table>
            </div>
            <AccessoriesInfo />
        </div>
    );
}

export default Monitors;