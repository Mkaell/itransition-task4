import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import Table from "../Pages/Table.jsx";
import Auth from "../Pages/Auth.jsx";


export default function routes(isAuth){
    if(isAuth){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/table">
                            <Table/>
                        </Route>
                        <Redirect to="/table" />
                    </Switch>
                </Router>
            </div>
        )
    } else {
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Auth />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </Router>
            </div>
        )
    }
}