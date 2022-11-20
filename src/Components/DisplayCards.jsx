import React from "react";
import Card from "./Card";

const DisplayCards = ({data}) => {
    const items = data.map((e, i) => {
        return <Card key={i} func={e.func} header={e.header} text={e.text} img={e.img} btn={e.btn} priceData={e.priceData}/>
    })
    
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap'
        }}>
            {items}
        </div>
    )
}

export default DisplayCards;