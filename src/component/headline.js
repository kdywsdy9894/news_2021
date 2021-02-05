import React from 'react';
import axios from 'axios';
import Article from './article'
import "./headline.css"

class Headline extends React.Component {
    state = {
        articles: [],
        isLoading: true
    }
    getNews = async () => {
        const { data: { articles } } = await axios.get(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0e8a1746fed04b03b5956928bfa557fc`)
        this.setState({ articles: articles, isLoading: false })
    }
    componentDidMount() {
        this.getNews();
    }
    render() {
        const { isLoading, articles } = this.state
        return (
            <div className="container">
                {isLoading ? (
                    <div className="loader">
                        <div className="loader-circle">
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                            <div className="circle3"></div>
                        </div>
                        <div className="loading-text">Here's your news!</div>
                    </div>
                ) : articles.map(article => {
                    console.log(article)
                    return (
                        <Article
                            title={article.title}
                            author={article.author}
                            description={article.description}
                            publishedAt={article.publishedAt}
                            source={article.source.name}
                            url={article.url}
                            urlToImage={article.urlToImage}
                        />
                    )
                })}
            </div>)
    }
}

export default Headline;