import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {registerUser} from "../../../features/authSlice";

import "../AuthInputs.scss";

export default function RegisterInputs() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(registerUser({data: {email, password}}));
    }

    return (
        <form className="register-inputs" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
                className="register-inputs__email"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
                className="register-inputs__password"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="register-inputs__submit-button">Submit</button>
        </form>
    );
}