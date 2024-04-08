import React, { Component } from 'react'
import PropTypes from 'prop-types'
import newsDefaultImage from "/news_default_image.jpg";

export class NewsItem extends Component {



  render() {

    let {fullTitle, title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-2'>
        <div className="card" style={{width: "18rem"}}>
        <div style={{height: 'auto', width: '18rem', overflow: 'hidden'}}>
          <img src={imageUrl?imageUrl:newsDefaultImage} className="card-img-top" 
            alt="Breaking news" style={{height: "10rem"}} title={fullTitle}/>
        </div>
        <div className="card-body">
            <h5 className="card-title" title={fullTitle}>{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read...</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
