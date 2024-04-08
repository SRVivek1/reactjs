import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="d-flex justify-content-center mt-auto shadow" 
            style={{border: '1px solid grey', backgroundColor: '#f8f9fa'}}>
            <div className="d-flex justify-content-between col-md-8 col-md-offset-2 mb-3 mt-5">
                <div className="align-left">
                    <a className="font-weight-bold small kf-blue kf-links mx-1" href="#">Facebook</a> |
                    <a className="font-weight-bold small kf-blue kf-links mx-1" href="#">Twitter</a> |
                    <a className="font-weight-bold small kf-blue kf-links mx-1" href="#">Instagram</a>
                </div>
                <div className="align-right small">
                    <a className="font-weight-bold kf-blue kf-links" href="#" 
                    target="_blank">NewsMoney & Company</a>
                </div>
            </div>
        </footer>
      </div>
    )
  }
}
