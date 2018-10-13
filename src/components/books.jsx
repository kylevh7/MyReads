import React, { Component } from 'react'
export default class Book extends React.Component{

render() {
    return (
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 188, backgroundImage:`url(${this.props.book.imageLinks? this.props.book.imageLinks.thumbnail:""})`||`${this.props.book.title} image is unavailable` }}>
              </div>
              <div className="book-shelf-changer">
                <select value={this.props.book.shelf || "none"} onChange={(e)=>{
                        this.props.update(this.props.book, e.target.value)}}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{this.props.title}</div>
            <div className="book-authors">{this.props.authors}</div>
          </div>
        </li>
    );
}
}
