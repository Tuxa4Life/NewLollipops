import React from "react";

const Card = ({img, header, text, btn, func}) => {
    return (
        <div className="card">
            <div className="image-wrapper">
                <img src={img} alt='ფოტო ვერ ამოიტვირთა' />
            </div>
            <div className="desc-wrapper">
                <div className="text">
                    <h3 style={{width: '100%', textAlign: 'center', fontSize: '24px'}}>{header}</h3>
                    {text}
                </div>
                <div className="buttons">
                    <button onClick={func}>{btn}</button>
                </div>
            </div>
        </div>
    )
}

export default Card;