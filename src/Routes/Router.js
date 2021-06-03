import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../Components/Home/Home';
import Error from '../Components/Errors/Error';
import Cat from '../Components/Cat/Cat';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/cat">
                    <Cat />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}