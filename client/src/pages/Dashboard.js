import React from "react";
import Category from "../components/Category";
import {useEffect, useState} from "react";
import Auth from '../utils/auth';


const Dashboard = () => {
    const [idToken,setIdToken] = useState (null);
    useEffect (() => {
        const token = Auth.getToken();
        if (token) {
            setIdToken(loggedInUser);
        }
        },[]); 
            return (
                <div>
                     {Auth.loggedIn() ? (
                < Category/>
              ) : (
                <span>(Please log in to see category)</span>
              )}
                </div>
            )
        }

export default Dashboard;
