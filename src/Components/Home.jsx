import React, {useState} from "react";
import styles from '../Assets/Styles/Home.css'
import DisplayCards from "./DisplayCards";

const Home = () => {
    const [data, setData] = useState([
        {
            text: 'test'
        },
        {
            text: 'test'
        }
    ])

    return (
        <main style={styles}>
            <h1>
                New Year!!!
            </h1>

            <DisplayCards data={data}/>
        </main>
    )
}

export default Home;