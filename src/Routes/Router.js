import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../Components/Home/Home';
import Error from '../Components/Errors/Error';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}