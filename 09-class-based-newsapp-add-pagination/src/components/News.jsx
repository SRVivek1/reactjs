import React, { Component } from "react";
import NewsItem from "./NewsItem";
import webLinks from "../assets/webLink.json"

export class News extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      articles: [],
      loading: true,
      totalResults: 0,
      pageSize: 12,
    };
  }

  /** Lifecycle method runs after render */
  async componentDidMount() {
    let newsApi = this.getNewsLink(1, this.state.pageSize);
    let newsData = await fetch(newsApi);
    let parsedData = await newsData.json();
    this.setState({
      totalResults: parsedData.totalResults,
      articles: parsedData.articles,
    });
  }

  /**Load news on previous index */
  handlePrevClick = async () => {

    let newsApi = this.getNewsLink(this.state.page - 1, this.state.pageSize);
    let newsData = await fetch(newsApi);
    let parsedData = await newsData.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  }

  /**Load new from next index */
  handleNextClick = async () => {
    let newsApi = this.getNewsLink(this.state.page + 1, this.state.pageSize);
    let newsData = await fetch(newsApi);
    let parsedData = await newsData.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  }

  /**Prepare new API link with given page size and page number */
  getNewsLink = (page, pageSize) => {
    page <= 0 ? page = 1 : page;
    let newsApi = webLinks.news.srcUrl + '&pageSize=' + pageSize + '&page=' + page;
    return newsApi;
  }

  /**Check if there are more news items on next page */
  hasMoreNewsItems = () => {
    let maxPages = Math.ceil(this.state.totalResults / this.state.pageSize);
    console.log('Ma pages : ' + maxPages);
    return this.state.page >= maxPages ? true : false;
  }

  render() {
    return (
      <div className="container my-3">
        <h3 className="text-center">NewsMoneky - Top {this.state.totalResults} headlines of today...</h3>
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
          <div className="d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className={`btn btn-${this.state.page <= 1 ? 'secondary': 'primary'}`} onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.hasMoreNewsItems()} type="button" className={`btn btn-${this.hasMoreNewsItems() ?  'secondary': 'primary'}`} onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
