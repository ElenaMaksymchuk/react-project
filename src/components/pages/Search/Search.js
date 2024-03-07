import React, { useEffect, useState } from "react";
import Button from "../../../elements/Button/Button";
import CustomLink from "../../../elements/CustomLink/CustomLink";
import "./Search.css";

const pages = {
    "Головна сторінка": "/",
    "Про нас": "/about",
    "Гарантійні умови": "/guarantee",
    "Аксесуари": "/accessories",
    "Телефони" : "/accessories/phones",
    "Комп'ютери": "/accessories/computers",
    "Монітори": "/accessories/monitors",
    "Пилососи": "/accessories/vacuumcleaners",
    "Холодильники": "/accessories/refrigerators",
    "Телевізори": "/accessories/televisions",
    "Хлібопічки": "/accessories/breadovens",
    "Вартість послуг": "/prices",
    "Відгуки": "/reviews",
    "Контакти": "/contacts",
    "Пошук": "/search",
    "Документація проекту": "http://127.0.0.1:8000",
    "Ремонт телефонів": "/prices/phonesrepair",
    "Ремонт комп'ютерів": "/prices/computersrepair",
    "Ремонт моніторів": "/prices/monitorsrepair",
    "Ремонт пилососів": "/prices/vacuumcleanersrepair",
    "Ремонт холодильників": "/prices/refrigeratorsrepair",
    "Ремонт телевізорів": "/prices/televisionsrepair",
    "Ремонт хлібопічок": "/prices/breadovensrepair"
};

function Search() {
    document.title = "Пошук";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [showNotFoundMessage, setShowNotFoundMessage] = useState(false);
    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim() === '') {
            setResults(Object.keys(pages));
        } else {
            const foundResults = Object.keys(pages).filter(page => page.toLowerCase().includes(query.toLowerCase()));
            setResults(foundResults);
            setShowNotFoundMessage(foundResults.length === 0);
        }
    };
    return (
        <main>
            <h3>Пошук сторінок</h3>
            <div className="search">
                
                <form className="searchForm" onSubmit={handleSearch}>
                    <input type="text" placeholder="Шукайте, наприклад, ремонт телефонів" value={query} onChange={(e) => setQuery(e.target.value)} required/>
                    <Button text={"Знайти"} type="big" />
                </form>
                {results.length > 0 && (
                    <div className="searchResults">
                        <p className="results">Результати пошуку</p>
                        {results.map((result, index) => (
                            <CustomLink key={index} to={pages[result]} text={result} target={"_blank"} />
                        ))}
                    </div>
                )}
                {showNotFoundMessage && <p className="noResults">Нічого не знайдено.</p>}
            </div>
        </main>
    );
}

export default Search;