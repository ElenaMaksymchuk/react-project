import React from "react";
import "./Menu.css";
import CustomLink from "../../../elements/CustomLink/CustomLink";

function Menu() {
    return (
        <div className="menu">            
            <CustomLink to="/" className="menuLink" text="Головна сторінка" />
            <CustomLink to="/about" className="menuLink" text="Про нас" />
            <CustomLink to="/guarantee" className="menuLink" text="Гарантійні умови" />
            <CustomLink to="/accessories" className="menuLink" text="Аксесуари" />
            <CustomLink to="/prices" className="menuLink" text="Вартість послуг" />
            <CustomLink to="/reviews" className="menuLink" text="Відгуки" />
            <CustomLink to="/contacts" className="menuLink" text="Контакти" />
            <CustomLink to="/search" className="menuLink" text="Пошук" />    
        </div>
    )
}

export default Menu;