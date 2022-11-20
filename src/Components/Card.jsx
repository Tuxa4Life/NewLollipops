import React from "react";

const Card = ({img, text}) => {
    return (
        <div className="card">
            <div className="image-wrapper">
                <img src={img} alt='ფოტო ვერ ამოიტვირთა' />
            </div>
            <div className="desc-wrapper">
                <div className="text">
                    {text}
                </div>
                <div className="buttons">
                    <button>ფასები</button>
                </div>
            </div>
        </div>
    )
}

export default Card;