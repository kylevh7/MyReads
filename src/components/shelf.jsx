import React, { Component } from 'react'
import Book from './books'
export default class Shelf extends React.Component{

    componentDidMount(){

    }

render() {
    console.log(this.props)
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
                {this.props.books.map(book => <Book update={this.props.update} key={book.id} book={book}
                />)}
            </ol>
          </div>
        </div>
    );
    }
}
