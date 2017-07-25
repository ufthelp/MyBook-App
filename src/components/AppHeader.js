import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';

/*AppHeader component to create headers for App
**Child Components : N/A
*/
class AppHeader extends Component{
    render(){
        return(
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to My Book App</h2>
            </div>

        )

    }

}

export default AppHeader;


