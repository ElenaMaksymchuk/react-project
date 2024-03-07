import './Image.css';

function Image({ src, className }) {
    return (
        <img src={src} className={className} alt=""></img>
    );
}

export default Image;