import React, { Component } from "react";
import { getSearch } from "../services/searchService";
import { Link } from "react-router-dom";

class SearchPage extends Component {
  state = { search: "", data: [] };
  async componentDidMount() {
    let { data } = await getSearch();
    this.setState({ data });
    let search = this.props.location.search;
    search = decodeURIComponent(search);
    search = search.replace(/%20/g, " ");
    search = search.substring(1, search.length);
    data = data.filter(
      (s) =>
        s.title.includes(search) ||
        s.shortDesc.includes(search) ||
        s.longDesc.includes(search)
    );
    data = Array.from(data);
    this.setState({ search, data });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="container pt-8">
        <div className="container p-3"></div>
        <div class="card-deck">
          {data.map((s) => (
            <div className="card" key={s._id}>
              {s.category ? (
                <Link className="home-news-link" to={"/projects/" + s._id}>
                  <img
                    className="card-img-top inner-shadow-emg"
                    src={s.shortImage}
                    alt="Card image cap"
                  />
                </Link>
              ) : (
                <Link className="home-news-link" to={"/news/" + s._id}>
                  <img
                    className="card-img-top inner-shadow-emg"
                    src={s.shortImage}
                    alt="Card image cap"
                  />
                </Link>
              )}

              <div className="card-body">
                <h5 className="card-title">
                  {s.category ? (
                    <Link className="home-news-link" to={"/projects/" + s._id}>
                      <span className="inner-shadow-emg">{s.title}</span>
                    </Link>
                  ) : (
                    <Link className="home-news-link" to={"/news/" + s._id}>
                      <span className="inner-shadow-emg">{s.title}</span>
                    </Link>
                  )}
                </h5>
                <p className="card-text">{s.shortDesc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="container p-4"></div>
      </div>
    );
  }
}

export default SearchPage;
