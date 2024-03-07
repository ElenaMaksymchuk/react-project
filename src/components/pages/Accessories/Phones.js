import React from "react";
import AccessoriesMessage from "./AccessoriesMessage";
import AccessoriesInfo from "./AccessoriesInfo";
import Image from "../../../elements/Image/Image";
import image12 from "../../../images/image12.jpg";
import { useEffect } from "react";

function Phones() {
    document.title = "Телефони";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
        <AccessoriesMessage />
        <div class="categoryInfo">
            <h3>Телефони</h3>
            <Image src={image12} className={"image3"} />
            <p>В нашому сервісному центрі Ви можете замовити аккумулятори, зарядні пристрої, кабелі для підключення до ПК та інші акссесуари для мобільних телефонів.</p>
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
                        <td>Акумулятор</td>
                        <td>Gelius Xiaomi Redmi Note 5 BN45</td>
                        <td>2099900758645</td>
                    </tr>
                    <tr>
                        <td>Акумулятор</td>
                        <td>PowerPlant для Samsung i9250</td>
                        <td>4775341360767</td>
                    </tr>
                    <tr>
                        <td>Зарядний пристрій</td>
                        <td>Samsung 15W Power Adapter Black</td>
                        <td>EP-T1510NBEGRU</td>
                    </tr>
                    <tr>
                        <td>Зарядний пристрій</td>
                        <td>Baseus Compact Charger 2USB 10.5W Black</td>
                        <td>CCXJ010201</td>
                    </tr>
                    <tr>
                        <td>Кабель для підключення до ПК</td>
                        <td>HOCO X88 USB - Micro USB</td>
                        <td>P401885220</td>
                    </tr>                   
                </tbody>
            </table>
        </div>
        <AccessoriesInfo />
        </div>
    );
}

export default Phones;