import React from "react";
import AccessoriesMessage from "./AccessoriesMessage";
import AccessoriesInfo from "./AccessoriesInfo";
import Image from "../../../elements/Image/Image";
import image9 from "../../../images/image9.jpg";
import { useEffect } from "react";

function Televisions() {
    document.title = "Телевізори";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <AccessoriesMessage />
            <div className="categoryInfo">
                <h3>Телевізори</h3>
                <Image src={image9} className={"image3"} />
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
                            <td>Пульт дистанційного керування</td>
                            <td>M2250D, M2450D</td>
                            <td>AKB74115502</td>
                        </tr>
                        <tr>
                            <td>Пульт дистанційного керування</td>
                            <td>24TL520V-PZ.ARUB</td>
                            <td>AKB75675321</td>
                        </tr>
                        <tr>
                            <td>Пульт дистанційного керування</td>
                            <td>DM2382D</td>
                            <td>AKB73275680</td>
                        </tr>
                        <tr>
                            <td>Камера AN-VC 500</td>
                            <td>LN5700, LN5710, LN5790, LN5750</td>
                            <td>EBX61809309</td>
                        </tr>
                        <tr>
                            <td>Блок живлення</td>
                            <td>28TN515S-WZ.ARUB</td>
                            <td>EAY63190107</td>
                        </tr>
                        <tr>
                            <td>Кріплення металеве</td>
                            <td>43UH676V.ARUB</td>
                            <td>MJH64333102</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <AccessoriesInfo />
        </div>
    )
}

export default Televisions;