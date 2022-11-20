import React from "react";
import Navbar from "./Components/Navbar";
import styles from './Assets/Styles/App.css'
import Route from './Components/Route'
import Home from "./Components/Home";
import Location from "./Components/Location";

const App = () => {
    return (
        <div style={styles} className="container">
            <Navbar />

            <Route path='/'>
                <Home />
            </Route>
            <Route path='/photosessions'>
                <h1 style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>მალე დაემატება</h1>
            </Route>
            <Route path='/location'>
                <Location />
            </Route>

        </div>
    )
}

export default App;