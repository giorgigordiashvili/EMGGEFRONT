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
        <div className="container">
          <h1 className="currentPageTitle pl-04 ">კარიერა</h1>
          <h5 className="color-emg pb-4 pl-04">იმუშავე ჩვენთან</h5>
          <h5 className="pl-04">ჩვენი პრინციპები</h5>
          <p className="pl-04 text-justify">
            გავრცელებული მოსაზრებით, Lorem Ipsum შემთხვევითი ტექსტი სულაც არაა.
            მისი ფესვები ჯერკიდევ ჩვ. წ. აღ-მდე 45 წლის დროინდელი კლასიკური
            ლათინური ლიტერატურიდან მოდის. ვირჯინიის შტატში მდებარე
            ჰემპდენ-სიდნეის კოლეჯის პროფესორმა რიჩარდ მაკკლინტოკმა აიღო ერთ-ერთი
            ყველაზე იშვიათი ლათინური სიტყვა "consectetur" Lorem Ipsum-პასაჟიდან
            და გადაწყვიტა მოეძებნა იგი კლასიკურ ლიტერატურაში. ძიება შედეგიანი
            აღმოჩნდა — ტექსტი Lorem Ipsum გადმოწერილი ყოფილა ციცერონის "de
            Finibus Bonorum et Malorum"-ის 1.10.32 და 1.10.33 თავებიდან. ეს
            წიგნი ეთიკის თეორიის ტრაქტატია, რომელიც რენესანსის პერიოდში ძალიან
            იყო გავრცელებული. Lorem Ipsum-ის პირველი ხაზი, "Lorem ipsum dolor
            sit amet..." სწორედ ამ წიგნის 1.10.32 თავიდანაა.
          </p>
          {isAdmin && (
            <Link
              style={{ marginBottom: "10px" }}
              className="btn btn-primary"
              to="/career/new"
            >
              ვაკანსიის დამატება
            </Link>
          )}
        </div>
        <div className="fluid-container  p-5">
          <div className="container">
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
        <div className="container p-5"></div>
      </React.Fragment>
    );
  }
}

export default Career;
