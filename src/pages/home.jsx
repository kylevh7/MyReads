import React, { Component } from 'react';
import Shelf from '../components/shelf';
import Action_button from '../components/action_button';
export default class Home extends React.Component{
    render(){
        return(
            <div className="list-books">
               <div className="list-books-title">
                   <h1>MyReads</h1>
               </div>
               //Render Shelf
               <div className="list-books-content">
                   <Shelf />
                   <Shelf />
                   <Shelf />
                   //FAB
               </div>
               <Action_button />
            </div>
        )
    }
}
