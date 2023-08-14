import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

const News = (props) => {

  const [ARTICLE, setARTICLE] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)

  const upadateNews = async () =>{
    props.SETProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ApiKey}&page=${page}&pageSize=9`;
    setloading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    setARTICLE(parseData.articles);
    setloading(false);
    props.SETProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalFirstLetter(props.category)} - News`;
    upadateNews();
    //this is used remove error
    //eslint-disable-next-line
  }, [])

  const handleNext = async () =>{
    setpage(page+1);
    upadateNews()
  }

  const handlePre = async () =>{
    setpage(page-1);
    upadateNews()
  }

  const capitalFirstLetter = (x) =>{
    return x.charAt(0).toUpperCase() + x.slice(1);
  }
    return (
      <div className="container my-5 "><h1 className="text-center text-decoration-underline fw-bold" style={{marginTop:'70px'}}>News - TOP Headlines From {props.category}</h1>
     

      
            <div className="row" style={{marginTop:'30px'}}>
            {!loading && ARTICLE.map((x)=>{
              return <div className="col-md-4 my-3" key={x.url}>
                        <NewsItem title={x.title} description={x.description} imgurl={x.urlToImage?x.urlToImage:"https://content.fortune.com/wp-content/uploads/2023/06/GettyImages-942218138.jpg?resize=1200,600"} url={x.url?x.url:"/"} date={x.publishedAt} author={x.author?x.author:"Unknown"}/>
            </div>})}     
        
        </div>
        <div className="container d-flex justify-content-between my-5 ">
        <button disabled={page<=1} type="button" className="btn btn-warning" onClick={handlePre}> &larr; Previous</button>
        <button disabled={page>=7} type="button" className="btn btn-warning" onClick={handleNext}>Next &rarr;</button>
        </div>
        {loading && <Spinner/>} 
      </div>
    )
}

News.defaultProps = {
  country: 'in',
  category: 'general'
}

// News.protoTypes = {
//   country: protoTypes.string,
//   page: protoTypes.number,
//   category: protoTypes.string
// }

export default News