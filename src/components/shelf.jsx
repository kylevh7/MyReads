import React, { Component } from 'react'
import Book from './books'
export default class Shelf extends React.Component{
    componentDidMount(){
        console.log(this);
    }

render() {
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
                {this.props.books && this.props.books.map(book => <Book key={book.id} {...book}
                />)}
            </ol>
          </div>
        </div>
    );
    }
}
