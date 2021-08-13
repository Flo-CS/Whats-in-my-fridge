import React from "react";
import {useHistory} from "react-router-dom";
import {PATHS} from "../../helpers/constants";
import RegisterInputs from "./RegisterInputs";

export default function RegisterPage() {
    const history = useHistory()

    return <div className="register-page">
        <h1>Inscription</h1><RegisterInputs/>
        <button className="register-page__go-login-button" onClick={() => history.push(PATHS.LOGIN)}>Aller se connecter
        </button>
    </div>;
}