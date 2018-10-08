import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Action_button extends React.Component{
    render(){
        return(
            <div className="open-search">
                <Link to={'/search'}></Link>
            </div>
        )
    }
}
