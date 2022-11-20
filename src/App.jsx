import React from "react";
import Navbar from "./Components/Navbar";
import styles from './Assets/Styles/App.css'
import Route from './Components/Route'
import Home from "./Components/Home";

const App = () => {
    return (
        <div style={styles} className="container">
            <Navbar />

            <Route path='/'>
                <Home />
            </Route>

        </div>
    )
}

export default App;