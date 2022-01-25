import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';

import axiosWithAuth from './../utils/axiosWithAuth';

const Logout = (props) => {
    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth()
        .post('/logout')
        .then(resp => {
            localStorage.removeItem('token')
            push('/login')
        })
    }, [])

    return(
        <div>
            
        </div>
    )
};

// const Logout = ()=> {
//     const { push } = useHistory();

//     useEffect(()=> {
//         axiosWithAuth()
//             .post('/logout')
//             .then(resp=>{
//                 localStorage.removeItem("token");
//                 push('/login');
//             }).catch(err=> {
//                 console.log(err);
//             });
//     }, []);
    
//     return(<div></div>);
// }

export default Logout;