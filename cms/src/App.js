import React from "react";
import Dashboard from "./components/Dashboard/Dashboard.js";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Dashboard />
            </BrowserRouter>
        </>
    )
}

export default App;