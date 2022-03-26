import React from "react";
import { Link } from "react-router-dom";

export default function aboutHeader({ active }) {
  return (
    <nav className="container">
      <div
        className="nav nav-tabs justify-content-center"
        id="nav-tab"
        role="tablist"
      >
        <Link
          className={
            active === "whoweare"
              ? `nav-item nav-link nav-link-emg active`
              : `nav-item nav-link nav-link-emg`
          }
          to="/about/whoweare"
        >
          ვინ ვართ ჩვენ
        </Link>
        <Link
          className={
            active === "governance"
              ? `nav-item nav-link nav-link-emg active`
              : `nav-item nav-link nav-link-emg`
          }
          to="/about/governance"
        >
          მმართველობა
        </Link>
        <Link
          className={
            active === "strategicvision"
              ? `nav-item nav-link nav-link-emg active`
              : `nav-item nav-link nav-link-emg`
          }
          to="/about/strategicvision"
        >
          სტრატეგიული ხედვა
        </Link>
        <Link
          className={
            active === "qualityandpermits"
              ? `nav-item nav-link nav-link-emg active`
              : `nav-item nav-link nav-link-emg`
          }
          to="/about/qualityandpermits"
        >
          ხარისხი და პასუხისმგებლობა
        </Link>

        <Link
          className={
            active === "partners"
              ? `nav-item nav-link nav-link-emg active`
              : `nav-item nav-link nav-link-emg`
          }
          to="/about/partners"
        >
          პარტნიორები
        </Link>
        <Link
          className={
            active === "trainings"
              ? `nav-item nav-link nav-link-emg active`
              : `nav-item nav-link nav-link-emg`
          }
          to="/about/training"
        >
          ტრენინგები
        </Link>
        <Link
          className={
            active === "certificates"
              ? `nav-item nav-link nav-link-emg active`
              : `nav-item nav-link nav-link-emg`
          }
          to="/about/certificates"
        >
          სერტიფიკატები
        </Link>
        <Link
          className={
            active === "branches"
              ? `nav-item nav-link nav-link-emg active`
              : `nav-item nav-link nav-link-emg`
          }
          to="/about/branches"
        >
          ფილიალები
        </Link>
      </div>
    </nav>
  );
}
