import React from 'react'

const NewsItem = (props) => {

    let { title, description, imgurl, url, date, author} = props;

    return (
      <div>
            <div className="card  border-danger mb-3 shadow-lg p-3 mb-5 bg-body rounded" >
                <img src={imgurl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title d-inline ">{title}<span className="badge bg-danger ms-3">New</span></h5>
                    <p className="card-text mt-3">{description}</p>
                    <p className="my-1 card-text"> By {author}  on {new Date(date).toGMTString()}</p>
                    <a rel="noreferrer" href={url} target="_blank" className="btn btn-primary w-100 my-3">Read More</a>
                </div>
            </div>
      </div>
    )
}

export default NewsItem
