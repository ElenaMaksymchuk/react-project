import React from "react";
import "./Footer.css";
import CustomLink from "../../../elements/CustomLink/CustomLink";

export default function Footer() {
    return (
        <footer>
            <div className="footerItems">
                <div className="footerMenu">
                    <span>Техно Майстер</span>
                    <CustomLink to="/" className="footerMenuLink" text="Головна сторінка" />
                    <CustomLink to="/about" className="footerMenuLink" text="Про нас" />
                    <CustomLink to="/guarantee" className="footerMenuLink" text="Гарантійні умови" />
                    <CustomLink to="/accessories" className="footerMenuLink" text="Аксесуари" />
                    <CustomLink to="/prices" className="footerMenuLink" text="Вартість послуг" />
                    <CustomLink to="/reviews" className="footerMenuLink" text="Відгуки" />
                    <CustomLink to="/contacts" className="footerMenuLink" text="Контакти" />
                    <CustomLink to="/search" className="footerMenuLink" text="Пошук" />
                </div>
                <div className="footerMenu">
                    <span>Аксесуари</span>
                    <CustomLink to="accessories/phones" className="footerMenuLink" text="Телефони" />
                    <CustomLink to="accessories/computers" className="footerMenuLink" text="Комп'ютери" />
                    <CustomLink to="accessories/monitors" className="footerMenuLink" text="Монітори" />
                    <CustomLink to="accessories/vacuumcleaners" className="footerMenuLink" text="Пилососи" />
                    <CustomLink to="accessories/refrigerators" className="footerMenuLink" text="Холодильники" />
                    <CustomLink to="accessories/televisions" className="footerMenuLink" text="Телевізори" />
                    <CustomLink to="accessories/breadovens" className="footerMenuLink" text="Хлібопічки" />
                </div>
                <div className="footerMenu">
                    <span>Вартість послуг</span>
                    <CustomLink to="prices/phonesrepair" className="footerMenuLink" text="Ремонт телефонів" />
                    <CustomLink to="prices/computersrepair" className="footerMenuLink" text="Ремонт комп'ютерів" />
                    <CustomLink to="prices/monitorsrepair" className="footerMenuLink" text="Ремонт моніторів" />
                    <CustomLink to="prices/vacuumcleanersrepair" className="footerMenuLink" text="Ремонт пилососів" />
                    <CustomLink to="prices/refrigeratorsrepair" className="footerMenuLink" text="Ремонт холодильників" />
                    <CustomLink to="prices/televisionsrepair" className="footerMenuLink" text="Ремонт телевізорів" />
                    <CustomLink to="prices/breadovensrepair" className="footerMenuLink" text="Ремонт хлібопічок" />
                </div>
                <div className="footerMenu">
                <span>Для програмістів</span>
                <CustomLink to="http://127.0.0.1:8000/" className="footerMenuLink" text="Документація проекту" target="_blank" />
            </div>
                <div className="footerContacts">
                    <span>Наші контакти</span>
                    <span>0 800 505 050</span>
                    <p>Пн.-Нд.: с 09:00 до 18:00</p>
                    <span>Адреса сервісу:</span>
                    <p>Україна, м. Житомир, 10001</p>
                    <p>вул. Київська 77,</p>
                    <p>Сервісний центр "Техно Майстер"</p>
                </div>
            </div>        
            <span className="copyright">© 2024 Всі права захищені.</span>
        </footer>
    );
}