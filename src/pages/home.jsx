import React, { Component } from 'react';
import Shelf from '../components/shelf';
import Book from '../components/books';
import Action_button from '../components/action_button';
import * as bookAPI from '../BooksAPI';
import {getAll} from '../BooksAPI';


export default class Home extends React.Component{
    constructor(props){
        super(props);
            this.state={
                books:[]
            }
    }
    componentDidMount(){
        getAll()
        .then(rec=>{
            console.log(rec)
            this.setState({books:rec});
        })
}
    update=(book,shelf)=>{
        bookAPI.update(book,shelf)
        .then(rec=>{
            book.shelf=shelf
            this.setState(state=>{
            books:state.books.filter(x=>x.id!==book.id).concat({book})
            console.log("trying to set state")
            return state;
            })
        })
    }


    render(){

        return(
            <div className="list-books">
               <div className="list-books-title">
                   <h1>MyReads</h1>
               </div>
               {/*Render Shelves*/}
               <div className="list-books-content">
                   <Shelf update={this.update} title="Books I am reading" books={this.state.books.filter(x=>x.shelf=== "currentlyReading")}/>
                   <Shelf update={this.update} title="Books I want to read" books={this.state.books.filter(x=>x.shelf=== "wantToRead")}/>
                   <Shelf update={this.update} title="Books I have read"
                       books={this.state.books.filter(x=>x.shelf=== "read")}/>

                   {/*FAB*/}
               </div>
               <Action_button />
            </div>
        )
    }
}
