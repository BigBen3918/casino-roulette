import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../components/style/custom.css";

import Header from "../components/header";
import Home from '../components/home';

function Routes() {
    const [balance, setBalance] = useState(0);
    useEffect(() => {

    }, []);

    return (
        <BrowserRouter>
            <Header balance={balance} />
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
