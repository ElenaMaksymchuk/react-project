import React from "react";
import "./Reviews.css";
import { useState, useEffect } from "react";
import Image from "../../../elements/Image/Image";
import Button from "../../../elements/Button/Button";
import Dialog from "../../../elements/Dialog/Dialog";
import image8 from "../../../images/image8.png";

function Reviews() {
    document.title = "Відгуки";
    const generateRandomUkrainianNumber = () => {
        const randomUkrainianNumber = '+380' + Math.floor(Math.random() * 100) + Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100);
        return randomUkrainianNumber;
    };
    const [reviews, setReviews] = useState([]);
    const [reviewsTypes, setReviewsTypes] = useState([]);
    const updateReviews = () => {
        fetch("http://127.0.0.1:8000/api/review")
            .then((response) => response.json())
            .then((json) => setReviews(json));
    };
    const closeDialog = () => {
        updateReviews();
    };

    const sendDataToServer = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        fetch("http://127.0.0.1:8000/api/review", {
            method: "POST",
            body: formData
        })
            .then(response => {
                let dialogText = document.querySelector("dialog p");
                if (response.ok) {
                    dialogText.textContent = "Ваш відгук було відправлено.";
                    document.getElementById("messageForm").reset();
                } else {
                    dialogText.textContent = "Помилка. Ваш відгук не було відправлено.";
                }
                document.querySelector('dialog').showModal();
            })
            .catch(error => {
                console.error("Error: ", error);
            });
    };
    useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementById('dialog').addEventListener('close', closeDialog);
        updateReviews();
        const phoneInput = document.getElementById('phone');
        phoneInput.placeholder = generateRandomUkrainianNumber();
        fetch("http://127.0.0.1:8000/api/review_type")
            .then((response) => response.json())
            .then((json) => setReviewsTypes(json));
    }, []);
    return (
        <main>
            <h3>Відгуки наших клієнтів</h3>
            <div className="reviews">
                <div className="text">
                    <p>Ми прагнемо надавати якісні послуги з високим рівнем сервісу. Ми вдячні нашим клієнтам за надану довіру і позитивні відгуки про спільну роботу.</p>
                    {reviews.map((review) => (
                        <div className="review" key={review.id}>
                            <Image key={review.id} src={image8} className="image1" />
                            <div>
                                <p>{review.fullname}</p>
                                <p>{review.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <h3>Залишити відгук</h3>
            <form className="messageForm" id="messageForm" onSubmit={sendDataToServer}>
                <input type="text" name="fullname" placeholder="Ваше ім'я" required />
                <input type="tel" name="phone" id="phone" pattern="\+380[0-9]{9}" required />
                <input type="email" name="email" placeholder="example@gmail.com" required />
                <select name="review_type_id">
                    {reviewsTypes.map((reviewType) => (
                        <option key={reviewType.id} value={reviewType.id}>
                            {reviewType.name}
                        </option>
                    ))}
                </select>
                <textarea name="text" placeholder="Текст повідомлення" cols="50" rows="10" required />
                <Button text="Надіслати" />
            </form>
            <Dialog />
        </main>
    );
}

export default Reviews;