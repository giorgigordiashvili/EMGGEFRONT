import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class Partner extends Component {
  render() {
    const { partners, user, onDeletePartner } = this.props;
    let isAdmin = false;

    if (user) isAdmin = user.isAdmin;

    return (
      <div className="container">
        <h1 className="currentPageTitle   pl-04">პარტნიორები</h1>
        {isAdmin && (
          <React.Fragment>
            <Link
              style={{ marginBottom: "10px" }}
              className="btn btn-primary"
              to="/partners/new"
            >
              პარტნიორის დამატება
            </Link>
          </React.Fragment>
        )}
        <div className="container row">
          {partners.map((partner) => (
            <div className="col-sm-6 col-md-3  p-1  ">
              <div className="border-emg row logoes justify-content-center">
                <img
                  alt={partner.name}
                  src={partner.logo}
                  className="img-fluid partner-img p-1 align-self-center"
                />
              </div>
              {isAdmin && (
                <React.Fragment>
                  <Link
                    to={"/partners/" + partner._id}
                    className="mt-auto card-btn btn btn-primary"
                  >
                    რედაქტირება
                  </Link>
                  {` `}
                  <Button
                    onClick={() => onDeletePartner(partner)}
                    variant="btn card-btn btn-danger"
                    className="mt-auto"
                  >
                    წაშლა
                  </Button>
                  <br />
                </React.Fragment>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Partner;
