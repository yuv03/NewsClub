import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
        <div style={{ display: 'flex',
                justifyContent: 'flex-end',
                position: 'absolute',
                right: '0'}}>
            <span
              className="badge rounded-pill bg-danger"
              
            >
              {source}
            </span>
            </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://cdn.siasat.com/wp-content/uploads/2021/05/background-3883181_1920.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text" style={{color:'#4737e8'}}>
                By {author ? author : "Unknown"} on {" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
