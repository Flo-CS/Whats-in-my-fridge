import React from "react";
import {Redirect, Route, Switch} from "react-router-dom"

import MainSidebar from "../components/main/MainSidebar";
import HomeView from "../components/main/home/HomeView";
import ProductView from "../components/main/product/ProductView";

function MainPage() {
    return (
        <div className="main">
            <MainSidebar/>
            <Switch>
                <Route exact path="/">
                    <HomeView/>
                </Route>
                <Route path="/products/:barcode">
                    <ProductView/>
                </Route>
                <Redirect from="*" to="/"/>
            </Switch>
        </div>
    );
}


export default MainPage;