import React from "react";
import Navbar from "./Components/Navbar";
import styles from './Assets/Styles/App.css'
import Route from './Components/Route'

const App = () => {
    return (
        <div style={styles} className="container">
            <Navbar />

            <Route path='/'>
                {/* home */}
            </Route>

        </div>
    )
}

export default App;