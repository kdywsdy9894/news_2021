import React from 'react'
import PropTypes from 'prop-types';

function Article({ title, author, description, publishedAt, source, url, urlToImage }) {
    return (
        <div className="article">
            <div className="title">{title}</div>
            <div className="author">{author}</div>
            <div className="description">{description}</div>
            <div className="publishedAt">{publishedAt}</div>
            <div className="source">{source}</div>
            <a className="url" href={url}>Original Article</a>
            <img src={urlToImage} />
        </div>
    )
}

Article.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired
}

export default Article