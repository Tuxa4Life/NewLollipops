import React, { useState, useEffect, useRef } from "react";

const Image = ({ link, alt }) => {
    const [span, setSpan] = useState(0)
    const ref = useRef(0)

    const setSpans = () => {
        const height = ref.current.clientHeight;
        const spans = Math.ceil(height / 10);
        setSpan(spans)
    }

    useEffect(() => {
        ref.current.addEventListener('load', setSpans)
    }, [])

    return (    
        <div style={{ gridRowEnd: `span ${span}` }}>
            <img ref={ref} className="gallery-pic" src={link} alt={alt} />
        </div>
    )
}

export default Image;