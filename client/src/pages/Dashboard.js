import React from "react";
// import Category from "../components/Category";
import {useEffect, useState} from "react";


const Dashboard = () => {
    const [authentificated, setauthentificated] = useState (null);
    useEffect (() => {
        const loggedInUser = localStorage.getItem('authentificated');
        if (loggedInUser) {
            setauthentificated(loggedInUser);
        }
        },[]); 
        if (!authentificated) {
            return (
                <div>
                    <p>you are non loggedInUser</p>
                </div>
            )

        } else {
            return (
                <div>
                    <p>Welcome to Dashboard!</p>
                </div>
            )
        }
        
    }


export default Dashboard;
  