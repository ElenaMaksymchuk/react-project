import React from "react";
import Image from "../../elements/Image/Image";
import Button from "../../elements/Button/Button";
import { useState, useEffect } from "react";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";

function Home() {
    document.title = "Головна сторінка";
    const generateRandomUkrainianNumber = () => {
        const randomUkrainianNumber = '+380' + Math.floor(Math.random() * 100) + Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100);
        return randomUkrainianNumber;
    };
    const sendDataToServer = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        fetch("http://127.0.0.1:8000/api/order", {
            method: "POST",
            body: formData
        })
            .then(response => {
                let dialogText = document.querySelector("dialog p");
                if (response.ok) {
                    dialogText.textContent = "Ваше замовлення було відправлено. Найближчим часом ми зв'яжемося з вами.";
                    document.getElementById("messageForm").reset();
                } else {
                    dialogText.textContent = "Помилка. Ваше замовлення не було відправлено.";
                }
                document.querySelector('dialog').showModal();
            })
            .catch(error => {
                console.error("Error: ", error);
            });
    };
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        const phoneInput = document.getElementById('phone');
        phoneInput.placeholder = generateRandomUkrainianNumber();
        fetch("http://127.0.0.1:8000/api/category")
            .then((response) => response.json())
            .then((json) => setCategories(json));
    }, []);
    return (
        <main>
            <div className="text">
                <h3>Сервісний центр, який завжди на зв'язку з клієнтами</h3>
                <p>Наш сервісний центр спеціалізується на ремонті різноманітної техніки, включаючи комп'ютери, ноутбуки, монітори, принтери, сканери та іншу офісну техніку. Ми забезпечуємо високоякісний ремонт та обслуговування вашої техніки, щоб вона працювала на максимальному рівні.</p>
                <p>Наші професіонали мають багаторічний досвід у ремонті комп'ютерної техніки та володіють необхідними знаннями та навичками для вирішення будь-яких проблем. Ми використовуємо тільки якісні запчастини та комплектуючі, щоб забезпечити тривалу роботу вашої техніки.</p>
                <p>Наш сервісний центр також спеціалізується на ремонті побутової техніки, такої як пральні машини, холодильники, плити та інші. Ми здатні вирішити будь-які проблеми з вашою технікою та забезпечити її надійну роботу.</p>
                <p>Якщо у вас є проблема з конкретною технікою, зверніться до нас за допомогою. Ми з радістю допоможемо вам вирішити будь-яку проблему та зробити ремонт вашої техніки якісним та надійним. Наші спеціалісти володіють всіма необхідними знаннями та досвідом для того, щоб вирішити будь-яку проблему з вашою технікою.</p>
            </div>
            <div className="images">
                <Image src={image2} className="image2" />
                <Image src={image3} className="image2" />
                <Image src={image4} className="image2" />
                <Image src={image5} className="image2" />
            </div>
            <h3>Замовити ремонт</h3>
            <form className="messageForm" id="messageForm" onSubmit={sendDataToServer}>
                <input type="text" name="fullname" placeholder="Ваше ім'я" required />
                <input type="tel" name="phone" id="phone" pattern="\+380[0-9]{9}" required />
                <input type="email" name="email" placeholder="example@gmail.com" required />
                <select name="category_id">
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <textarea name="text" placeholder="Текст повідомлення" cols="50" rows="10" required />
                <Button text="Надіслати" />
            </form>
        </main>
    );
}

export default Home;