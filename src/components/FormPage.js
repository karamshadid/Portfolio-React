import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput
} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { IoLogoLinkedin } from "react-icons/io";
import { GoMarkGithub } from "react-icons/go";
import { GoMail } from "react-icons/go";

const FormPage = () => {
  return (
    <MDBContainer id="mdbcontainer">
      <MDBRow className="mdbrow">
        <MDBCol md="4">
          <form>
            <p className="h5 text-center mb-4">Write to me</p>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />

              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />

              <MDBInput
                label="Subject"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />

              <MDBInput
                type="textarea"
                rows="2"
                label="Your message"
                icon="pencil-alt"
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="secondary">
                Send <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>

      <div className="icons">
        <span>
          {" "}
          <a href="https://www.linkedin.com/in/karam-shadid/">
            <IoLogoLinkedin />
          </a>
        </span>
        <span>
          {" "}
          <a href="https://github.com/karamshadid" target="_blank">
            {" "}
            <GoMarkGithub />{" "}
          </a>
        </span>
        <span>
          {" "}
          <a href="mailto:k.shadid83@gmail.com" target="_blank">
            {" "}
            <GoMail />
          </a>
        </span>
      </div>
    </MDBContainer>
  );
};

export default FormPage;
