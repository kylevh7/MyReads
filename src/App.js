import React from 'react'
import Home from './pages/home'
import Search from './pages/search'
import {Switch,Route} from 'react-router-dom'

// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
    state = {
        showSearchPage: false
    }

    render() {
        return (<div className="app">
        <switch>
            <Route exact path={'/'} component={Home}></Route>
            <Route exact path={'/search'} component={Search}></Route>
        </switch>
        </div>)

    }
}

export default BooksApp
