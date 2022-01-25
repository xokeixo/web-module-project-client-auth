import React from "react";
import axios from "axios";

import Friend from './Friend';

class FriendsList extends React.Component {
    state = {
        friends: []
    }
    componentDidMount() {
        const token = localStorage.getItem('token')

        axios.get('/api/friends', {
            headers: {
                authorization: token
            }
        })
        .then(resp => {
            this.setState({
                friends: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
           <div>
               <h1>Friends</h1>
               <div>
                   {this.state.friends.map(friend => (
                       <Friend friend={friend}/>
                   ))}
               </div>
           </div> 
        )
    }
};

export default FriendsList;