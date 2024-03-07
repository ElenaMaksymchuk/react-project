import './Button.css';

function Button({text, type, func}) {
    return (
        <input value={text} className={type === "small" ? "blueButton small" : type === "big" ? "blueButton big" : "blueButton"} type="submit" onClick={func}/>
    );
}

export default Button;