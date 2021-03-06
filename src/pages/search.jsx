import React, {Component} from 'react'
import {Link} from "react-router-dom"
import {getAll} from '../BooksAPI'
import Book from '../components/books'
import * as bookAPI from '../BooksAPI'
import update from '../BooksAPI'

export default class Search extends React.Component {

    constructor(props) {
            super(props);
                this.state = {
                    books: [],
                    results: [],
                    query: ""
        }
    }

    componentDidMount() {
        getAll().then(rec => {
            this.setState({books: rec});
        })
    }

    update = (book, shelf) => {
        bookAPI.update(book, shelf).then(rec => {
            book.shelf = shelf
            this.setState(state => {
                books : state.books.filter(x => x.id !== book.id).concat({book})
                return state;
            })
        })
    }

    queryUpdate = (query) => {
        this.setState({
            query: query
        }, this.searching);
    }

    searching() {
        if (this.state.query === "" || this.state.query === undefined) {
            return this.setState({results: []})
        }
        bookAPI.search(this.state.query).then(rec => {
            if (rec.error) {
                return this.setState({results: []})
            } else {
                rec.forEach((x) => {
                    let found = this.state.books.filter(y => y.id === x.id)
                    if (found[0]) {
                        x.shelf = found[0].shelf
                    }
                })
                return this.setState({results: rec});
            }
        })
    }

    render() {
        return (<div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.queryUpdate(event.target.value)}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.results.map(book => <Book key={book.id} update={this.update} book={book}/>)}
                </ol>
            </div>
        </div>)
    }
}
