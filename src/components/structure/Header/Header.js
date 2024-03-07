import Menu from "../Menu/Menu";
import "./Header.css";
import Image from "../../../elements/Image/Image";
import Button from "../../../elements/Button/Button";
import Dialog from "../../../elements/Dialog/Dialog";
import image1 from "../../../images/image1.png";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    const generateRandomUkrainianNumber = () => {
        const randomUkrainianNumber = '+380' + Math.floor(Math.random() * 100) + Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100);
        return randomUkrainianNumber;
    };
    const sendDataToServer = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        fetch("http://127.0.0.1:8000/api/callback", {
            method: "POST",
            body: formData
        }).then(response => {
            let dialogText = document.querySelector("dialog p");
            if (response.ok) {
                closeModal();
                document.getElementById("callbackForm").reset();
                dialogText.textContent = "Ваше замовлення було відправлено. Найближчим часом ми зв'яжемося з вами.";
                document.getElementById('dialog').showModal();
            }
        })
            .catch(error => {
                console.error("Error:", error);
            });
    };
    return (
        <div>
            <header>
                <Image src={image1} className="image1" />
                <div className="name">Техно Майстер</div>
                <div className="phone">
                    <span>Телефон горячої лінії</span>
                    <span>0 800 505 050</span>
                    <span>Пн.-Нд.: с 09:00 до 18:00</span>
                </div>
                <div className="address">
                    <span>Адреса сервісу:</span>
                    <span>Україна, м. Житомир, 10001</span>
                    <span>вул. Київська 77,</span>
                    <span>Сервісний центр "Техно Майстер"</span>
                </div>
                <div className="schedule">
                    <span>Графік роботи:</span>
                    <span>Пн.-Пт.: 9:00 - 18:00</span>
                    <span>Сб.: вихідний</span>
                    <span>Нд.: вихідний</span>
                </div>
                <Button text={"Замовити дзвінок"} func={openModal} />
            </header>
            <Menu />
            {isOpen && (
                <div className="callBackFormContainer">
                    <form className="callBackForm" id="callbackForm" onSubmit={sendDataToServer}>
                        <h2>Хочете, ми Вам зателефонуємо?</h2>
                        <input type="text" name="fullname" placeholder="Ваше ім'я" required />
                        <input type="tel" name="phone" pattern="\+380[0-9]{9}" placeholder={generateRandomUkrainianNumber()} required />
                        <div className="buttons">
                            <Button text="Так" type="big" />
                            <Button text="Ні, дякую" type="big" func={closeModal} />
                        </div>
                    </form>
                </div>
            )}
            <Dialog />
        </div>
    );
}