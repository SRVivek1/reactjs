import React, { Component } from "react";
import NewsItem from "./NewsItem";
import webLinks from "../assets/webLinks.json"
import headings from "../assets/headlines2.json"
import Loading from "./Loading";

export class News extends Component {

  /**set testMode to false to load live news. */
  constructor() {
    super();
    this.state = {
      page: 1,
      articles: [],
      loading: false,
      totalResults: 0,
      pageSize: 12,
      testMode: true,
    };
  }

  /** Lifecycle method runs after render */
  async componentDidMount() {
    let newsApi = this.getNewsLink(1, this.state.pageSize);
    let parsedData = await this.loadNews(newsApi);
    this.setState({
      totalResults: parsedData.totalResults,
      articles: parsedData.articles,
      loading: false,
    });
  }

  /**Load news on previous index */
  handlePrevClick = async () => {

    let newsApi = this.getNewsLink(this.state.page - 1, this.state.pageSize);
    let parsedData = await this.loadNews(newsApi);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  }

  /**Load new from next index */
  handleNextClick = async () => {
    let newsApi = this.getNewsLink(this.state.page + 1, this.state.pageSize);
    let parsedData = await this.loadNews(newsApi);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  }

  /**Prepare new API link with given page size and page number */
  getNewsLink = (page, pageSize) => {
    page <= 0 ? page = 1 : page;
    let newsApi = webLinks.news.srcUrl + this.props.secrets.news.api_key + '&pageSize=' + pageSize + '&page=' + page;
    return newsApi;
  }

  /** Load news. */
  loadNews = async (newsApi) => {
    this.setState({
      loading: true,
    });
    let parsedData = "{}";

    if(this.state.testMode) {
      parsedData = headings;
      console.log("Test mode : loading mocked news.")
    } else {
      let newsData = await fetch(newsApi);
      parsedData = await newsData.json();
    }
    return parsedData;
  }

  /**Check if there are more news items on next page */
  hasMoreNewsItems = () => {
    let maxPages = Math.ceil(this.state.totalResults / this.state.pageSize);
    return this.state.page >= maxPages ? true : false;
  }

  render() {
    return (
      <div className="container my-3">
        <h3 className="text-center">NewsMoneky - Top {this.state.totalResults} headlines of today...</h3>
        
        {/** Show loader while loading.*/}
        {this.state.loading && <Loading />}
        
        <div className="row">
          {this.state.articles.map((element) => {
            const newsDescription =
              element.description === null || element.description.trim() === ""
                ? "No live description available for now. please follow read link to check full story."
                : element.description.split("").length > 88 ? element.description.slice(0, 88) + "....." 
                : element.description;

            const newsTitle =
              element.title === null || element.title.trim() === ""
                ? "No title available."
                : element.title.split("").length > 45 ? element.title.slice(0, 45) + "....." : element.title;

            return (
              <div key={element.url} className="col-md-4 my-1">
                <NewsItem
                  fullTitle={element.title}
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
