import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
import {
  BiBulb,
  BiBriefcaseAlt,
  BiCalendar,
  BiBookReader,
  BiCalendarAlt,
  BiChalkboard,
  BiGroup,
  BiCheckSquare,
  BiNetworkChart,
  BiCartAlt,
  BiStoreAlt,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-row ">
            <div className="footer-link-logo">
              <div className="footer-logo">
                <a href="https://uic.edu">
                  <img src={logo} alt="uic logo" aria-label="logo" />
                </a>
              </div>
              <div className="footer--address">
                <div>1200 West Harrison St</div>
                <div>Chicago, Illinois 60607</div>
                <div style={{ marginTop: 20 }}>(312) 996-7000</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-links footer-links-data">
          <div className="footer-list-title">
            <h2>QUICK LINKS</h2>
          </div>
          <div className="footer-col">
            <div className="footer-row-links">
              <div className="footer-col-row-link">
                <p>
                  <a
                    style={{ display: "flex", flexDirection: "row" }}
                    title="CATE"
                    href="https://careerservices.uic.edu/"
                  >
                    <BiBulb size={23} style={{ marginRight: 15 }} />
                    <p>CATE</p>
                  </a>
                </p>
              </div>
              <div className="footer-col-row-link">
                <p>
                  <a
                    style={{ display: "flex", flexDirection: "row" }}
                    title="Career Services"
                    href="https://careerservices.uic.edu/"
                  >
                    <BiBriefcaseAlt size={23} style={{ marginRight: 15 }} />
                    <p>Career Services</p>
                  </a>
                </p>
              </div>
              <div className="footer-col-row-link">
                <p>
                  <a
                    style={{ display: "flex", flexDirection: "row" }}
                    title="Career Services"
                    href="https://banner.apps.uillinois.edu/StudentRegistrationSSB/ssb/term/termSelection?mode=search&mepCode=2UIC"
                  >
                    <BiCalendar size={23} style={{ marginRight: 15 }} />
                    <p>Schedule of Classes</p>
                  </a>
                </p>
              </div>
              <div className="footer-col-row-link">
                <p>
                  <a
                    style={{ display: "flex", flexDirection: "row" }}
                    title="Career Services"
                    href="http://library.uic.edu/"
                  >
                    <BiBookReader size={23} style={{ marginRight: 15 }} />
                    <p>UIC Library</p>
                  </a>
                </p>
              </div>
            </div>
            <div className="footer-row-links">
              <div className="footer-col-row-link">
                <p>
                  <a
                    style={{ display: "flex", flexDirection: "row" }}
                    title="Career Services"
                    href="http://catalog.uic.edu/ucat/academic-calendar/"
                  >
                    <BiCalendarAlt size={23} style={{ marginRight: 15 }} />
                    <p>Academic Calendar</p>
                  </a>
                </p>
              </div>
              <div className="footer-col-row-link">
                <p>
                  <a
                    style={{ display: "flex", flexDirection: "row" }}
                    title="Career Services"
                    href="http://go.uic.edu/linkedinlearning"
                  >
                    <BiChalkboard size={23} style={{ marginRight: 15 }} />
                    <p>Linkedin Learning</p>
                  </a>
                </p>
              </div>
              <div className="footer-col-row-link">
                <p>
                  <a
                    style={{ display: "flex", flexDirection: "row" }}
                    title="Career Services"
                    href="http://www.uic.edu/uic/studentlife/studentservices/"
                  >
                    <BiGroup size={23} style={{ marginRight: 15 }} />
                    <p>Student Services</p>
                  </a>
                </p>
              </div>
              <div className="footer-col-row-link">
                <p>
                  <a
                    style={{ display: "flex", flexDirection: "row" }}
                    title="Career Services"
                    href="https://uic.turbovote.org/?r=blackboard"
                  >
                    <BiCheckSquare size={23} style={{ marginRight: 15 }} />
                    <p>Turbo Vote (Get Registered)</p>
                  </a>
                </p>
              </div>
            </div>
            <div className="footer-row-links">
              <div className="footer-col-row-link">
                <p>
                  <a
                    style={{ display: "flex", flexDirection: "row" }}
                    title="Career Services"
                    href="http://connect.uic.edu/"
                  >
                    <BiNetworkChart size={23} style={{ marginRight: 15 }} />
                    <p>UIC Connection</p>
                  </a>
                </p>
              </div>
              <div className="footer-col-row-link">
                <p>
                  <a
                    style={{ display: "flex", flexDirection: "row" }}
                    title="Career Services"
                    href="http://webstore.illinois.edu/home/"
                  >
                    <BiCartAlt size={23} style={{ marginRight: 15 }} />
                    <p>Web Store</p>
                  </a>
                </p>
              </div>
              <div className="footer-col-row-link">
                <p>
                  <a
                    style={{ display: "flex", flexDirection: "row" }}
                    title="Career Services"
                    href="http://coursematerials.uicbookstore.org/"
                  >
                    <BiStoreAlt size={23} style={{ marginRight: 15 }} />
                    <p>UIC Bookstore</p>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
