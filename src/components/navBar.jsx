import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import auth from "../services/authService";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    user: {
      _id: "",
      bag: "",
      email: "",
      isAdmin: "",
      name: "",
      dropdown: true,
    },
    isOpen: false,
  };
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  handleSearch = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    window.location.replace(`/search?${this.state.value}`);
  }

  render() {
    return (
      <div className="fluid-container navv fixed-top bg-emg-blue">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/home" className="nav-link">
                    მთავარი
                  </NavLink>
                </li>
                <li className="nav-item dropdown ">
                  <NavLink
                    className="nav-link"
                    id="aboutus"
                    to="/about/"
                    data-toggle="dropdown_one"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    ჩვენ შესახებ
                  </NavLink>
                  <div
                    className={
                      this.state.dropdown
                        ? "dropdown-menu show dropdown-custom"
                        : "dropdown-menu dropdown-custom"
                    }
                    aria-labelledby="aboutus"
                  >
                    <Link
                      className="dropdown-item dropdown-item-custom"
                      to={{ pathname: "/about/whoweare" }}
                    >
                      ვინ ვართ ჩვენ
                    </Link>
                    <Link
                      className="dropdown-item dropdown-item-custom"
                      to={{ pathname: "/about/governance" }}
                    >
                      მმართველობა
                    </Link>
                    <Link
                      className="dropdown-item dropdown-item-custom"
                      to={{ pathname: "/about/strategicvision" }}
                    >
                      სტრატეგიული ხედვა
                    </Link>
                    <Link
                      className="dropdown-item dropdown-item-custom"
                      to={{ pathname: "/about/qualityandpermits" }}
                    >
                      ხარისხი და პასუხისმგებლობა
                    </Link>
                    <Link
                      className="dropdown-item dropdown-item-custom"
                      to={{ pathname: "/about/partners" }}
                    >
                      პარტნიორები
                    </Link>
                    <Link
                      className="dropdown-item dropdown-item-custom"
                      to={{ pathname: "/about/training" }}
                    >
                      ტრენინგი
                    </Link>
                    <Link
                      className="dropdown-item dropdown-item-custom"
                      to={{ pathname: "/about/branches" }}
                    >
                      ფილიალები
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown ">
                  <NavLink
                    className="nav-link"
                    id="activities"
                    to="/activities/"
                    data-toggle="dropdown_two"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    საქმიანობა
                  </NavLink>
                  <div
                    className={
                      this.state.dropdown
                        ? "dropdown-menu show dropdown-custom"
                        : "dropdown-menu dropdown-custom"
                    }
                    aria-labelledby="activities"
                  >
                    <Link
                      className="dropdown-item dropdown-item-custom"
                      to={{ pathname: "/activities/engineering" }}
                    >
                      საინჟინრო მიმართულება
                    </Link>
                    <Link
                      className="dropdown-item dropdown-item-custom"
                      to={{ pathname: "/activities/services" }}
                    >
                      მომსახურება
                    </Link>
                    <Link
                      className="dropdown-item dropdown-item-custom"
                      to={{ pathname: "/activities/customers" }}
                    >
                      დამკვეთები
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown ">
                  <NavLink
                    className="nav-link"
                    id="activities"
                    to="/projects/"
                    data-toggle="dropdown_three"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    პროექტები
                  </NavLink>
                  <div
                    className={
                      this.state.dropdown
                        ? "dropdown-menu show dropdown-custom"
                        : "dropdown-menu dropdown-custom"
                    }
                    aria-labelledby="projects"
                  >
                    <Link
                      className="dropdown-item dropdown-item-custom"
                      to={{ pathname: "/projects/ongoing" }}
                    >
                      მიმდინარე პროექტები
                    </Link>
                    <Link
                      className="dropdown-item dropdown-item-custom"
                      to={{ pathname: "/projects/done" }}
                    >
                      დასრულებული პროექტები
                    </Link>
                  </div>
                </li>

                <li className="nav-item">
                  <NavLink to="/news" className="nav-link">
                    სიახლეები
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/career" className="nav-link">
                    კარიერა
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">
                    კონტაქტი
                  </NavLink>
                </li>
                <li className={this.state.isOpen ? "search open " : "search"}>
                  <form
                    className="d-flex flex-row"
                    onSubmit={this.handleSubmit}
                  >
                    <input
                      type="text"
                      className="search-box"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </form>
                  <span className="search-button" onClick={this.handleSearch}>
                    <span className="search-icon"></span>
                  </span>
                </li>
              </ul>
              <ul className="navbar-nav pr-2">
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    REGISTER
                  </a>
                </li> */}

                {this.props.user.isAdmin && (
                  <li className="nav-item">
                    <a className="nav-link" href="/logout">
                      გასვლა
                    </a>
                  </li>
                )}
                <li className="nav-item">
                  <a className="nav-link" href="http://portal.emg.ge">
                    პორტალი
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://emg.ge">
                    EN
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
