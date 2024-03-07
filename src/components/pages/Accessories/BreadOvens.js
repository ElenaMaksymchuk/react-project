import React from "react";
import Image from "../../../elements/Image/Image";
import image8 from "../../../images/image8.jpg";
import AccessoriesMessage from "./AccessoriesMessage";
import AccessoriesInfo from "./AccessoriesInfo";
import { useEffect } from "react";

function BreadOvens() {
    document.title = "Хлібопічки";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <AccessoriesMessage />
            <div className="categoryInfo">
                <h3>Хлібопічки</h3>
                <Image src={image8} className={"image3"} />
                <p>З нашими хлібопічками у Вас вдома завжди буде свіжий хліб у будь-який зручний для Вас час і той тип хліба, який Ви захочете.</p>
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
                            <td>Форма для випічки</td>
                            <td>Все 2.0lb (900 г)</td>
                            <td>Не поставляється</td>
                        </tr>
                        <tr>
                            <td>Стакан мірний</td>
                            <td>Усе</td>
                            <td>EBZ60822111</td>
                        </tr>
                        <tr>
                            <td>Ложка мірна</td>
                            <td>Усе</td>
                            <td>EBZ60822112</td>
                        </tr>
                        <tr>
                            <td>Лопатка</td>
                            <td>Усе</td>
                            <td>Не поставляється</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <AccessoriesInfo />
        </div>
    );
}

export default BreadOvens;