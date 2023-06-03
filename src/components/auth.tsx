import { useNavigate } from "react-router-dom";
import { getToken } from "../services/auth";
import { useEffect, useState } from "react";
import { AppState } from "../services/constants";
import { useSelector } from "react-redux";

export const Auth = ({ children }: { children: JSX.Element }) => {
    const navigate = useNavigate();
    const { accessToken } = useSelector((state: { app: AppState }) => state.app);

    useEffect(()=>{
        if(!accessToken){
            getToken()
                .then(()=>{})
                .catch(()=>{
                    navigate("/login");
                })
        }
    },[accessToken, navigate])

    return(
        accessToken ? children : null
    )
}

export const NotAuth = ({ children }: { children: JSX.Element }) => {
    const navigate = useNavigate();
    const [notAuth, setNotAuth] = useState(false);

    useEffect(()=>{
        getToken()
        .then(()=>{
            navigate("/")
        })
        .catch(()=>{
            setNotAuth(true);
        })
    },[navigate]);

    return(
        notAuth ? children : null
    )
}