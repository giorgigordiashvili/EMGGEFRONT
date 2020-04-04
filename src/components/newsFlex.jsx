import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../services/authService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Moment from "react-moment";

class NewsFlex extends Component {
  render() {
    const { newss, onDelete } = this.props;
    const isAdmin = auth.isAdmin();
    return (
      <div className="card-deck">
        {newss.map((news) => (
          <div key={news._id} className="card m-2">
            {isAdmin && (
              <React.Fragment>
                <Link
                  to={"/editnews/" + news._id}
                  className="mt-auto card-btn btn btn-primary"
                >
                  რედაქტირება
                </Link>

                <Button
                  onClick={() => onDelete(news)}
                  variant="btn card-btn btn-danger"
                  className="mt-auto"
                >
                  წაშლა
                </Button>
                <br />
              </React.Fragment>
            )}
            <div className="card-body project-body">
              <div className="project vh-50 d-flex column align-items-end">
                <h5 className="card-title project-title-container pr-4 pl-4 pt-1 pb-2">
                  <span className="inner-shadow-emg ">{news.title}</span>
                </h5>
              </div>
              <p className="card-text p-2">{news.shortDesc}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted row justify-content-between">
                <div>
                  <a href={news.fbLink} className="card-link color-emg">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href={news.twLink} className="card-link color-emg">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
                <div className="color-emg">
                  <Moment format="DD MM YYYY" withTitle>
                    {news.publishDate}
                  </Moment>
                </div>
              </small>
            </div>
          </div>
        ))}
      </div>

      // <div className="fluid-container">
      //   <div className="card-deck">
      //     {newss.map(news => (
      //       <div
      //         key={news._id}
      //         className="card card-news m-2"
      //         style={{
      //           borderRadius: 0,
      //           height: "50vh",
      //           backgroundPosition: "center",
      //           background:
      //             "linear-gradient(rgba(10, 87, 128, 0.4), rgba(10, 87, 128, 0.4)),url(" +
      //             news.shortImage +
      //             ")"
      //         }}
      //       >
      //         <div className="card-body d-flex flex-column justify-content-end">
      //           <div className="row">
      //             <h5 className="card-title">
      //               <span className="inner-shadow-emg  white-emg">
      //                 <Link className="news-link" to={"/news/" + news._id}>
      //                   {news.title}
      //                 </Link>
      //               </span>
      //             </h5>
      //             <p className="card-text white-emg">
      //               {news.shortDesc} Lorem ipsum dolor sit amet, consectetur
      //               adipisicing elit. Ab in sunt ratione! Eius atque
      //               necessitatibus temporibus? Fuga repellendus delectus
      //               sapiente quis beatae similique animi vitae ut. Odit
      //               assumenda veritatis magnam.
      //             </p>

      //             {isAdmin && (
      //               <React.Fragment>
      //                 <Link
      //                   to={"/editnews/" + news._id}
      //                   className="mt-auto card-btn btn btn-primary"
      //                 >
      //                   Edit
      //                 </Link>

      //                 <Button
      //                   onClick={() => onDelete(news)}
      //                   variant="btn card-btn btn-danger"
      //                   className="mt-auto"
      //                 >
      //                   Delete
      //                 </Button>
      //                 <br />
      //               </React.Fragment>
      //             )}
      //           </div>
      //         </div>
      //         <div className="card-footer">
      //           <small className="text-muted row justify-content-between">
      //             <div>
      //               <a href="#" className="card-link white-emg">
      //                 <FontAwesome className="fab fa-facebook-f"></FontAwesome>
      //               </a>
      //               <a href="#" className="card-link white-emg">
      //                 <FontAwesome className="fab fa-twitter"></FontAwesome>
      //               </a>
      //             </div>
      //             <span className="color-white">
      //               <Moment format="DD MM YYYY" withTitle>
      //                 {news.publishDate}
      //               </Moment>
      //             </span>
      //             {!isAdmin && (
      //               <Link className="news-link" to={"/news/" + news._id}>
      //                 Read More
      //               </Link>
      //             )}
      //           </small>
      //         </div>
      //       </div>
      //     ))}
      //   </div>
      // </div>
    );
  }
}

export default NewsFlex;
