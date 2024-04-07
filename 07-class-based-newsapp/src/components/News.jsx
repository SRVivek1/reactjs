import React, { Component } from "react";
import NewsItem from "./NewsItem";
import data from "./headlines.json";

export class News extends Component {

  constructor(){
    super();
    this.state ={
       loading: false,
       totalResults: data.totalResults,
       articles: data.articles,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h4>Top headlines of today...</h4>
        <div className="row">
            {this.state.articles.map((element)=>{
                const newsDescription = element.description === null 
                    || element.description.trim() === "" ? "No description available." 
                        : element.description.slice(0, 88) + ".....";

                const newsTitle = element.title === null || element.title.trim() === "" 
                    ? "No title available." : element.title.slice(0, 30) + ".....";
                return <div key={element.url}  className="col-md-4 my-1">
                    <NewsItem title={newsTitle} description={newsDescription} 
                        imageUrl={element.urlToImage} newsUrl={element.url} />
                </div> 
            })}
        </div>
      </div>
    );
  }
}

export default News;
