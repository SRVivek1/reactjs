import React, { Component } from "react";
import NewsItem from "./NewsItem";
import webLinks from "./webLinks.json"

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      totalResults: 0,
    };
  }

  /** Lifecycle method runs after render */
  async componentDidMount() {
    let newsApi = webLinks.news.srcUrl;
    let newsData = await fetch(newsApi);
    let parsedData = await newsData.json();
    this.setState({
      totalResults: parsedData.totalResults,
      articles: parsedData.articles,
    });
  }

  render() {
    return (
      <div className="container my-3">
        <h4>Top {this.state.totalResults} headlines of today...</h4>
        <div className="row">
          {this.state.articles.map((element) => {
            const newsDescription =
              element.description === null || element.description.trim() === ""
                ? "No description available."
                : element.description.slice(0, 88) + ".....";

            const newsTitle =
              element.title === null || element.title.trim() === ""
                ? "No title available."
                : element.title.slice(0, 45) + ".....";

            return (
              <div key={element.url} className="col-md-4 my-1">
                <NewsItem
                  title={newsTitle}
                  description={newsDescription}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
