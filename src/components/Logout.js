import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';

import axiosWithAuth from './../utils/axiosWithAuth';

const Logout = (props) => {
    const { push } = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token')
        const role = localStorage.getItem('role')
        const username = localStorage.getItem('username')

        const credentials = {
            username: username,
            role: role,
            token: token,
        }

        axios.post('http://localhost:9000/api/logout',{
            credentials: credentials
        })
            .then(res=>{
                console.log(res)
                props.history.push('/')
            })
            .catch(err=>{
                console.log(err)
            })
    }, [])

    return(
        <div>
            
        </div>
    )
};


export default Logout;