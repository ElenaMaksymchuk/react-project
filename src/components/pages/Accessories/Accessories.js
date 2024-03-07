import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomLink from "../../../elements/CustomLink/CustomLink";
import AccessoriesContent from "./AccessoriesContent";
import Phones from "./Phones";
import Computers from "./Computers";
import Monitors from "./Monitors";
import VacuumCleaners from "./VacuumCleaners";
import Refrigerators from "./Refrigerators";
import Televisions from "./Televisions";
import BreadOvens from "./BreadOvens";
import "./Accessories.css"

function Accessories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        fetch("http://127.0.0.1:8000/api/category")
            .then((response) => response.json())
            .then((json) => setCategories(json));
    }, []);
    const setPath = (name) => {
        let path = "accessories";
        if (name === "Телефони") {
            path = "phones";
        }
        if (name === "Комп'ютери") {
            path = "computers";
        }
        if (name === "Монітори") {
            path = "monitors";
        }
        if (name === "Пилососи") {
            path = "vacuumcleaners";
        }
        if (name === "Холодильники") {
            path = "refrigerators";
        }
        if (name === "Телевізори") {
            path = "televisions";
        }
        if (name === "Хлібопічки") {
            path = "breadovens";
        }
        return path;
    }
    return (
        <main>
            <h3>Аксесуари</h3>
            <div className="categories">
                <div className="categoriesMenu">
                    {categories.map((category) => (
                        <CustomLink key={category.id} to={setPath(category.name)} className="categoryMenuLink" text={category.name} />
                    ))}
                </div>
                <div className="categoryContent">
                    <Routes>
                        <Route path="/" element={<AccessoriesContent />} />
                        <Route path="phones" element={<Phones />} />
                        <Route path="computers" element={<Computers />} />
                        <Route path="monitors" element={<Monitors />} />
                        <Route path="vacuumcleaners" element={<VacuumCleaners />} />
                        <Route path="refrigerators" element={<Refrigerators />} />
                        <Route path="televisions" element={<Televisions />} />
                        <Route path="breadovens" element={<BreadOvens />} />
                    </Routes>
                </div>
            </div>
        </main>
    );
}

export default Accessories;