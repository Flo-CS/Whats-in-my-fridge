import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import "./App.scss";
import AuthRoute from "./components/auth/AuthRoute";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import {checkUserToken} from "./features/auth/authSlice";
import LoginPage from "./pages/LoginPage";

import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserToken());
    }, [dispatch]);

    return <div className="app">
        <Router>
            <Switch>
                <AuthRoute exact path="/login">
                    <LoginPage/>
                </AuthRoute>
                <Route exact path="/register">
                    <RegisterPage/>
                </Route>
                {/* TODO : CHANGE THAT ROUTE TO PROTECTED ROUTE => DISABLED FOR DEVELOPMENT PURPOSE*/}
                <ProtectedRoute path="/">
                    <MainPage/>
                </ProtectedRoute>
            </Switch>
        </Router>
    </div>;
}

export default App
