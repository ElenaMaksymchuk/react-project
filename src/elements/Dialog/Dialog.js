import Button from "../Button/Button";
import './Dialog.css';

function Dialog() {
    return (
        <dialog id="dialog">
            <p>Text</p>
            <form method="dialog">
                <Button text="OK" type="small" />
            </form>
        </dialog>
    );
}

export default Dialog;