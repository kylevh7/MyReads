import React, {Component} from 'react';
import {Link} from "react-router-dom";
import * as bookAPI from '../BooksAPI';
import {getAll} from '../BooksAPI';
import Book from '../components/books'

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
        bookAPI.getAll()
        .then(rec => {
            this.setState({books: rec})
            console.log(rec)
        })
    }

    queryUpdate=(query)=>{
        this.setState({
            query: query
        }, this.searching);
    }

    searching() {
        if (this.state.query === "" || this.state.query === undefined) {
            return this.setState({results: []})
        }
        bookAPI.search(this.state.query.trim()).then(rec => {

            if (rec.error) {
                return this.setState({results: []})
            } else {
                return this.setState({results: rec})
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
                    {
                        this.state.results.map(book => <Book  key={book.id} book={book} />)
                        }


                </ol>
            </div>
        </div>
        )
    }
}
