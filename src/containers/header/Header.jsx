import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import "./header.css";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";

const Signin = () => (
  <>
    <div className="box-field">
      <div className="signin__box">
        <div className="signin__login">
          <div className="signin__heading">
            <h3>Blackboard</h3>
          </div>
          <div className="signin__button">
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://uic.blackboard.com/auth-saml/saml/login?apId=_150_1&redirectUrl=https%3A%2F%2Fuic.blackboard.com%2Fultra";
              }}
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="signin__options">
          <div className="signin__options__heading">
            <h5>
              Alternatively, go Mobile! <br></br>Access grades,courses and more
              from the blackboard app on your phone
            </h5>
          </div>
          <div className="signin__options__text">
            <h5>For Students</h5>
          </div>
          <div className="signin__options__image ">
            <div className="signin__options__image-container google">
              <a href="https://play.google.com/store/apps/details?id=com.blackboard.android.bbstudent&hl=en_US&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                <img
                  alt="Get it on Google Play"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                />
              </a>
            </div>
            <div className="signin__options__image-container apple">
              <a href="https://apps.apple.com/us/app/blackboard/id950424861?itsct=apps_box_badge&amp;itscg=30200">
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1421366400&h=a077ed9fc19114ea356cceb1d7e17f80"
                  alt="Download on the App Store"
                />
              </a>
            </div>
          </div>
          <div className="signin__options__text">
            <h5>For Teachers</h5>
          </div>
          <div className="signin__options__image ">
            <div className="signin__options__image-container google">
              <a href="https://play.google.com/store/apps/details?id=com.blackboard.android.bbstudent&hl=en_US&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                <img
                  alt="Get it on Google Play"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                />
              </a>
            </div>
            <div className="signin__options__image-container apple">
              <a href="https://apps.apple.com/us/app/blackboard/id950424861?itsct=apps_box_badge&amp;itscg=30200">
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1421366400&h=a077ed9fc19114ea356cceb1d7e17f80"
                  alt="Download on the App Store"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
const Help = () => (
  <>
    <div className="box-field-1">
      <div className="help-container">
        <div className="help-heading">
          <h3>Instructions and Help</h3>
        </div>
        <div className="help-text">
          <p>Login using your NetId and Password</p>
          <p>
            <span>For More Information visit </span>
            <a
              href="https://it.uic.edu/services-support/student-resources/ed-tech/blackboard-introduction/"
              style={{
                color: "#fff",
                fontSize: "16px",
                textDecoration: "underline",
              }}
            >
              Here
            </a>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            deleniti suscipit minima, minus tempore quis nisi, quo quaerat
            dolorem dolor veniam pariatur ad, earum voluptate? Assumenda officia
            dolores sit at?
          </p>
        </div>
      </div>
    </div>
  </>
);
const DemoCarousel = () => (
  <>
    <div className="box-field-2">
      <div>
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
        >
          <div>
            <a href="/" tabIndex={0}>
              <img src={image1} alt="Image1" />
            </a>
          </div>

          <div>
            <a href="/" tabIndex={0}>
              <img src={image2} alt="Image2" />
            </a>
          </div>
          <div>
            <a href="/" tabIndex={0}>
              <img src={image2} alt="Image3" />
            </a>
          </div>
        </Carousel>
      </div>
    </div>
  </>
);

const Header = () => {
  return (
    <div>
      <div className="rowC">
        <Signin />
        <Help />
        <DemoCarousel />
      </div>
    </div>
  );
};

export default Header;
