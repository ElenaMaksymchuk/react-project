import React from "react";
import AccessoriesMessage from "./AccessoriesMessage";
import AccessoriesInfo from "./AccessoriesInfo";
import Image from "../../../elements/Image/Image";
import image14 from "../../../images/image14.jpg";
import { useEffect } from "react";

function Refrigerators() {
    document.title = "Холодильники";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <AccessoriesMessage />
            <div className="categoryInfo">
                <h3>Холодильники</h3>
                <Image src={image14} className={"image3"} />
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
                            <td>Фільтр для води</td>
                            <td>GR-P247JHLE</td>
                            <td>ADQ32617703</td>
                        </tr>
                        <tr>
                            <td>Фільтр для води</td>
                            <td>GW-P227HLQA</td>
                            <td>ADQ73693901</td>
                        </tr>
                        <tr>
                            <td>Полиця для води</td>
                            <td>GA-B489TGDF</td>
                            <td>5035JA1001C</td>
                        </tr>
                        <tr>
                            <td>Полиця для холодильника</td>
                            <td>GC-M247CABV.ANSQCIS</td>
                            <td>AHT74413811</td>
                        </tr>
                        <tr>
                            <td>Контейнер для холодильника</td>
                            <td>GBB39DSJZ.ADSQEUR</td>
                            <td>AJP72975208</td>
                        </tr>
                        <tr>
                            <td>Ущільнювач гумовий для двері</td>
                            <td>GC-B207WVQA.CSEQUKR</td>
                            <td>ADX72910107</td>
                        </tr>
                        <tr>
                            <td>Обмежувач відкривання</td>
                            <td>GR-P247JHLE.ALEQCIS</td>
                            <td>AAJC34211602</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
            <AccessoriesInfo />
        </div>
    );
}

export default Refrigerators;