import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import auth from "../services/authService";
import careerPlus from "../res/plus.png";
import Moment from "react-moment";

class Career extends Component {
  state = {};
  render() {
    const { careers, onDelete } = this.props;
    const isAdmin = auth.isAdmin();
    return (
      <React.Fragment>
        <div className="thumbnail"></div>
        <div className="container pb-4">
          <h1 className="currentPageTitle pl-04 ">კარიერა</h1>
        </div>
        <div className="fluid-container highlight p-5">
          <div className="container">
            <p className="pl-04 text-justify">
              ადამიანური რესურსების მართვის დეპარტამენტის (HR) დანიშნულებაა,
              უზრუნველყოს კომპანიაში კადრების გამართული ფუნქციონირება. HR ხელს
              უწყობს ჯანსაღი და სამართლიანი ორგანიზაციული გარემოს შექმნას.
              ჩვენთვის არსებითად მნიშვნელოვანია სწორი კადრის სწორ პოზიციაზე
              შერჩევა, თანამშრომლების მოტივირება და მათ განვითარებაზე მუდმივი
              ზრუნვა. ადამიანური რესურსი ყველაზე ძვირფასი კაპიტალია, რომელიც
              დიდწილად განაპირობებს ორგანიზაციის წარმატებას. დასაქმებულთა
              პროფესიული ზრდისა და განვითარების ხელშეწყობით ჩვენ კომპანიის
              სტაბილურ განვითარებას უზრუნველვყოფთ. მაღალკვალიფიციური კადრების
              მოზიდვის მიზნით HR დეპარტამენტი თანამშრომლობს არაერთ
              უნივერსიტეტთან.
            </p>
            <p className="pl-04 text-justify">
              ორგანიზაცია ასევე შესაძლებლობას აძლევს სტაჟირების მსურველებს,
              მიიღონ პრაქტიკული გამოცდილება და განივითარონ პროფესიული
              უნარ-ჩვევები. სტაჟირება ეხმარება დასაქმებულს, გააცნობიეროს
              საკუთარი სუსტი და ძლიერი მხარეები, იმუშაოს თვითგანვითარებაზე და
              გაარკვიოს რა მოსწონს და რის გაკეთებას ისურვებს ის მომავალში.
              სტაჟირების შედეგების შეფასებიდან გამომდინარე მიიღება
              გადაწყვეტილება კომპანიაში შემდგომი დასაქმების შესახებ.
            </p>

            <p className="pl-04 text-justify">
              ამასთან, ჩვენ ყოველთვის მზად ვართ, შევხვდეთ ენერგიულ და ნიჭიერ
              პროფესიონალებს, რომლებსაც ჩვენი გუნდის წევრობა სურთ.
            </p>
            <p className="pl-04 text-justify">
              თუ გსურთ, ჩვენმა ორგანიზაციამ განიხილოს თქვენი კანდიდატურა
              მომავალში, გთხოვთ, გამოაგზავნოთ თქვენი CV და სამოტივაციო წერილი
              მისამართზე: hr@emg.ge
            </p>
            {!careers.length && (
              <p className="pl-04 text-justify">ამჟამად ვაკანსიები არ გვაქვს</p>
            )}
            {isAdmin && (
              <Link
                style={{ marginBottom: "10px" }}
                className="btn btn-primary"
                to="/career/new"
              >
                ვაკანსიის დამატება
              </Link>
            )}
            <div
              className="mb-4 pl-04 accordion"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              {careers &&
                careers.map((career) => (
                  <div className="card career" key={career._id}>
                    <div
                      className="card-header"
                      role="tab"
                      id={"heading" + career._id}
                    >
                      <h2 className="mb-0 row justify-content-between">
                        <div className="col-sm-6">
                          <button
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href={"#collapse" + career._id}
                            aria-expanded="false"
                            aria-controls={"collapse" + career._id}
                            className="btn btn-link career-tab text-dark"
                          >
                            <img src={careerPlus} alt="Career plus" />
                            {" " + career.title}
                          </button>

                          {isAdmin && (
                            <React.Fragment>
                              <Link
                                to={"/career/" + career._id}
                                className="mt-auto card-btn btn btn-primary"
                              >
                                რედაქტირება
                              </Link>
                              <Button
                                onClick={() => onDelete(career)}
                                variant="btn card-btn btn-danger"
                                className="mt-auto"
                              >
                                წაშლა
                              </Button>
                            </React.Fragment>
                          )}
                        </div>
                        <p className="career-date m-2">
                          დაწყება:{" "}
                          <Moment format="D MMM YYYY" withTitle>
                            {career.published}
                          </Moment>
                        </p>
                        <p className="career-date m-2">
                          დასრულება:
                          <Moment format="D MMM YYYY" withTitle>
                            {career.endDate}
                          </Moment>
                        </p>
                      </h2>
                    </div>
                    <div
                      id={"collapse" + career._id}
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby={"heading" + career._id}
                    >
                      <p className="card-body text-justify">
                        {career.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Career;
