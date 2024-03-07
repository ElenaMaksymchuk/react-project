import React from "react";
import AccessoriesMessage from "./AccessoriesMessage";
import AccessoriesInfo from "./AccessoriesInfo";
import Image from "../../../elements/Image/Image";
import image11 from "../../../images/image11.jpg";
import { useEffect } from "react";

function Computers() {
    document.title = "Комп'ютери";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <AccessoriesMessage />
            <div className="categoryInfo">
                <h3>Комп'ютери</h3>
                <Image src={image11} className={"image3"} />
                <p>Для замовлення доступні блоки живлення, кабелі, кулери, гарнітури та веб-камери.</p>
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
                            <td>Блок живлення</td>
                            <td>GameMax VP-800 800W</td>
                            <td>P96352642</td>
                        </tr>
                        <tr>
                            <td>Блок живлення</td>
                            <td>Zalman MegaMax ZM800-TXII 800W</td>
                            <td>P331526233</td>
                        </tr>
                        <tr>
                            <td>Блок живлення</td>
                            <td>Chieftec Proton BDF-1000C 1000W</td>
                            <td>P24199182</td>
                        </tr>
                        <tr>
                            <td>Кабель блока живлення</td>
                            <td>UKC ACS від 220V, 1,5 м</td>
                            <td>P392119617</td>
                        </tr>
                        <tr>
                            <td>Кабель блока живлення</td>
                            <td>CEE 7/7-C13 10A/250V 1.2м</td>
                            <td>P370377747</td>
                        </tr>
                        <tr>
                            <td>Кулер</td>
                            <td>DeepCool GAMMAXX 300</td>
                            <td>P219000</td>
                        </tr>
                        <tr>
                            <td>Кулер</td>
                            <td>RZTK PcCooler EF120 ARGB</td>
                            <td>P349710519</td>
                        </tr>
                        <tr>
                            <td>Гарнітура</td>
                            <td>GamePro 7.1 з RGB підсвічуванням</td>
                            <td>P399391359</td>
                        </tr>
                        <tr>
                            <td>Гарнітура</td>
                            <td>HyperX Cloud III Wireless Black</td>
                            <td>P396863442</td>
                        </tr>
                        <tr>
                            <td>Веб-камера</td>
                            <td>A4Tech PK-940HA 1080P Black</td>
                            <td>P263986786</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <AccessoriesInfo />
        </div>
    );
}

export default Computers;