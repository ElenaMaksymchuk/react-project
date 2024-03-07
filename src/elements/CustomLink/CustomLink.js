import "./CustomLink.css";
import { NavLink } from "react-router-dom";

function CustomLink({ to, className, target, text }) {
    const setActive = ({ isActive }) => {
        if (isActive) {
            switch (className) {
                case "menuLink":
                    return "activeMenuLink";
                case "footerMenuLink":
                    return "activeFooterMenuLink";
                case "categoryMenuLink":
                    return "activeCategoryMenuLink";
                default:
                    return "";
            }
        } else {
            return className;
        }
    };
    return (
        <NavLink to={to} className={setActive} target={target}>{text}</NavLink>
    );
}

export default CustomLink;