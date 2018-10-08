import React from 'react'
import Home from './pages/home'
import Search from './pages/search'
import {Switch,Route} from 'react-router-dom'
import {getAll} from './BooksAPI'



// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

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
