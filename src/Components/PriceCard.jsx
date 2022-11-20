import React from "react";

const PriceCard = ({ closeFunc }) => {
    return (
        <div className="priceCard">
            <div className="desc">
                <p style={{fontSize: '32px'}}>3 რეალური კედელი <strong>მხოლოდ საბავშვო</strong>: <br /> 100 ფოტო, 15 დამუშავებული, <br /> 200ლ</p>
                <br />
                <p style={{fontSize: '32px'}}> 3 რეალური კედელი <strong>საოჯახო</strong>: <br /> 100 ფოტო, 15 დამუშავებული, <br /> 250ლ</p>
                <br />
                <p style={{fontSize: '32px'}}> 4 რეალური კედელი <strong>საოჯახო</strong>: <br /> 150 ფოტო, 20 დამუშავებული, <br /> 300ლ</p>
            </div>
            
            <ul style={{marginLeft: '50px', fontSize: '24px'}}>
                <li>300 ლარიან პაკეტს აქციით, ფოტოსესიის დროს გადაღებული ფოტოებით დამზადებული ფოტო წიგნი მოყვება</li>
                <li>საოჯახო პაკეტი მოიცავს მშოვლების და შვილების სესიას <strong><i>მხოლოდ!</i></strong></li>
                <li>მოცემული პაკეტები არ მოქმედებს ჩვილებზე.</li>
            </ul>

            <button style={{position: 'absolute', bottom: '20px', right: '20px'}} onClick={closeFunc}>დახურვა</button>
        </div>
    )
}

export default PriceCard;