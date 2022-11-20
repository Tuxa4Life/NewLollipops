import React from "react";
import Card from "./Card";

const DisplayCards = ({data}) => {
    const items = data.map(e => {
        return <Card text={e.text} />
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