import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../store/userSlice";

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(logout(''))
            navigate("/")
        }, 500);
    }, []);

    return (
        <div>
            Logout in progress...
        </div>
    );
};

export default Logout;
