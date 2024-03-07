import React from "react";
import "./Contacts.css";
import Button from "../../../elements/Button/Button";
import { useState, useEffect } from "react";
import Dialog from "../../../elements/Dialog/Dialog";

function Contacts() {
    document.title = "Контакти";
    const generateRandomUkrainianNumber = () => {
        const randomUkrainianNumber = '+380' + Math.floor(Math.random() * 100) + Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100);
        return randomUkrainianNumber;
    };
    const sendDataToServer = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        fetch("http://127.0.0.1:8000/api/question", {
            method: "POST",
            body: formData
        })
            .then(response => {
                let dialogText = document.querySelector("dialog p");
                if (response.ok) {
                    dialogText.textContent = "Ваше питання було відправлено. Найближчим часом ми зв'яжемося з вами.";       
                    document.getElementById("messageForm").reset();             
                } else {
                    dialogText.textContent = "Помилка. Ваше питання не було відправлено.";
                }
                document.getElementById('dialog').showModal();
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };
    const [questionCategories, setQuestionCategories] = useState([]);
    const [productBrands, setProductBrands] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        const phoneInput = document.getElementById('phone');
        phoneInput.placeholder = generateRandomUkrainianNumber();
        fetch("http://127.0.0.1:8000/api/question_category")
            .then((response) => response.json())
            .then((json) => setQuestionCategories(json));
        fetch("http://127.0.0.1:8000/api/product_brand")
            .then((response) => response.json())
            .then((json) => setProductBrands(json));
    }, []);
    return (
        <main>
            <h3>Як нас знайти</h3>
            <div className="contacts">
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.996483198904!2d28.656091976545703!3d50.2546499715555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c6493ebf252ed%3A0xcada781000d71138!2z0JrQuNC10LLRgdC60LDRjyDRg9C7LiwgNzcsINCW0LjRgtC-0LzQuNGALCDQltC40YLQvtC80LjRgNGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAxMDAwMA!5e0!3m2!1sru!2sua!4v1706741112659!5m2!1sru!2sua" width="600" height="450" style={{ border: 0 }}></iframe>
                </div>
                <div className="text">
                    <div className="block">
                        <p>Телефон горячої лінії</p>
                        <p>0 800 505 050</p>
                        <p>Пн.-Нд.: с 09:00 до 18:00</p>
                    </div>
                    <div className="block">
                        <p>Адреса сервісу:</p>
                        <p>Україна, м. Житомир, 10001</p>
                        <p>вул. Київська 77,</p>
                        <p>Сервісний центр "Техно Майстер"</p>
                    </div>
                    <div className="block">
                        <p>Графік роботи:</p>
                        <p>Пн.-Пт.: 9:00 - 18:00</p>
                        <p>Сб.: вихідний</p>
                        <p>Нд.: вихідний</p>
                    </div>
                </div>
            </div>
            <h3>Задати питання</h3>
            <form className="messageForm" id="messageForm" onSubmit={sendDataToServer}>
                <input type="text" name="fullname" placeholder="Ваше ім'я" required />
                <input type="tel" name="phone" id="phone" pattern="\+380[0-9]{9}" required />
                <input type="email" name="email" placeholder="example@gmail.com" required />
                <select name="question_category_id">
                    {questionCategories.map((questionCategory) => (
                        <option key={questionCategory.id} value={questionCategory.id}>
                            {questionCategory.name}
                        </option>
                    ))}
                </select>
                <select name="product_brand_id">
                    {productBrands.map((productBrand) => (
                        <option key={productBrand.id} value={productBrand.id}>
                            {productBrand.brand}
                        </option>
                    ))}
                </select>
                <textarea name="question" placeholder="Текст повідомлення" cols="50" rows="10" required />
                <Button text="Надіслати" />
            </form>
            <Dialog />
        </main>
    );
}

export default Contacts;