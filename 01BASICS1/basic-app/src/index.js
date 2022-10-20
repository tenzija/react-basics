import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from "./db.json"

import NewsList from './components/news_list';
import Header from './components/header';
import Footer from './components/footer';
import Life from './components/lifecycle';
import './styles/style.css'

class App extends Component {
    
    state = {
        news: JSON,
        filtered: JSON,
        footerText: 'I am a Happy Footer',
        active: true,
    }

    getKeywords = (event) => {
        let keywords = event.target.value
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1
        })

        this.setState({
            filtered
        })
    }

    render() {

        const {news, footerText, filtered, active} = this.state

        return(
            <>
                <Header
                    keywords={this.getKeywords}    
                />
                
                <NewsList
                    news={filtered}
                >
                    <br/>
                    <h1>I am a child</h1>
                </NewsList>
                
                { active ? 
                    <Life/>
                : null }
                
                <button
                    onClick={() => this.setState({active:!this.state.active})}
                >Action</button>
                
                <Footer
                    footerText={footerText}
                />
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))