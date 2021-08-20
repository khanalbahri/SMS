import React from 'react';
import Dashboard from "./components/Dashboard/Dashboard.js";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Auth from './components/Auth/Auth.js';
import "./index.css";

function App() {
    return (
        <div>
            <BrowserRouter >
            <Switch>
                <Route path="/authentication" component={Auth} />
                <Route path="/" component={Dashboard} />
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;
