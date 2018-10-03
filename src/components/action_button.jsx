import React, { Component } from 'react';
export default class Action_button extends React.Component{
    render(){
        return(
            <div className="open-search">
                <a onClick={() => this.setState({showSearchPage: true})}>Add a book</a>
            </div>
        )
    }
}
