import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card"  >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img  src={!imageUrl ? "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/breaking-news-live-poster-design-template-246158d7780548f5b1bc22dfb93d8651_screen.jpg?ts=1619083519" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...  </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem
