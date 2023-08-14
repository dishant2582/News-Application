import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const MyInfiniteScroll = (props) => {

  const [ARTICLE, setARTICLE] = useState([])
  const [loading, setloading] = useState(false)
  const [totalResult, settotalResult] = useState(0)
  const [page, setpage] = useState(1)
    
  const upadateNews = async() =>{
    props.SETProgress(10);
    let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=39f19c7a648645c199770ec390893ffc&page=${page}&pageSize=15`;
    setloading(true)
    let data = await fetch(url);
    let parseData = await data.json();
    setARTICLE(ARTICLE.concat(parseData.articles));
    setloading(false);
    settotalResult(parseData.articles);
    props.SETProgress(100);
  }



    const fetchMoreData = async() => {
      let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=39f19c7a648645c199770ec390893ffc&page=${page+1}&pageSize=15`;
      setloading(true);
      setpage(page+1)
      let data = await fetch(url);
      let parseData = await data.json();
      setARTICLE(ARTICLE.concat(parseData.articles));
      setloading(false);
      settotalResult(parseData.articles);
    };

    useEffect(() => {
      upadateNews();
      // eslint-disable-next-line
    }, [])

    return (
        <div className="container my-5 "><h1 className="text-center text-decoration-underline fw-bold" style={{marginTop:'70px'}}>News - TOP Headlines </h1>

        <InfiniteScroll
          dataLength={ARTICLE.length}
          next={fetchMoreData}
          hasMore={ARTICLE.length !== totalResult}
          loader={<Spinner/>}>

              <div className="row">
                {!loading && ARTICLE.map((x)=>{
                    return <div className="col-md-4 my-3" key={x.url}>
                            <NewsItem title={x.title} description={x.description} imgurl={x.urlToImage?x.urlToImage:"https://content.fortune.com/wp-content/uploads/2023/06/GettyImages-942218138.jpg?resize=1200,600"} url={x.url?x.url:"/"} date={x.publishedAt} author={x.author?x.author:"Unknown"}/>
                            </div>})}     
              </div>
          </InfiniteScroll>
          </div>
    )
}

export default MyInfiniteScroll;

