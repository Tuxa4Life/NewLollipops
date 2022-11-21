import React, { useState } from "react";
import Image from "./Image";

const Gallery = () => {
    const [srcs, setSrcs] = useState([
        {name: 'https://i.ibb.co/LY6W5gP/01.jpg'},
        {name: 'https://i.ibb.co/GCZfkfh/DSC-7301.jpg'},
        {name: 'https://i.ibb.co/SNn4ZSh/0001.jpg'},
        {name: 'https://i.ibb.co/PwD4pg3/DSC-6973.jpg'},
        {name: 'https://i.ibb.co/7bSw8Zx/7777.jpg'},
        {name: 'https://i.ibb.co/GxRH9g8/6666.jpg'},
        {name: 'https://i.ibb.co/8gZTjRz/55555.jpg'},
        {name: 'https://i.ibb.co/JHGwXRb/1-6.jpg'},
        {name: 'https://i.ibb.co/0MFdLs9/6599.jpg'},
        {name: 'https://i.ibb.co/R4s3tkm/11.jpg'},
        {name: 'https://i.ibb.co/LPQDZvG/7.jpg'},
        {name: 'https://i.ibb.co/py9L1K8/0005.jpg'},
        {name: 'https://i.ibb.co/WpcbHzh/03.jpg'},
        {name: 'https://i.ibb.co/4mXH4bY/1-3.jpg'},
        {name: 'https://i.ibb.co/XZjg5hM/1-1.jpg'},
    ])

    const photos = srcs.map((e, i) => {
        return <Image key={i} link={e.name} alt='error'/>
    })

    return <div className="gallery">{photos}</div>
}

export default Gallery;