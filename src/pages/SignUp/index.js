import React from "react";
import "./style.css";
import MainLogo from "../../assets/Logo.png";
import BgImageLeft from "../../assets/login_page_assets/left_Side.png";
import BgImageRight from "../../assets/login_page_assets/right_Side.png";
import GoogleIcon from "../../assets/login_page_assets/google_Icon.png";
import { Col, Row, Image, Button, Form } from "react-bootstrap";

function SignUp() {
  return (
    <Row>
      <Col md={7} className="pl-0 pr-0">
        {/* <Image src={BgImageLeft} className="img-fluid vh-100 w-100" /> */}
        <div className="px-5 pt-3">
          <Image src={MainLogo} className="img-fluid" width={180} />

          <div className="my-4">
            <div className="text-title text-semibold">Create an account</div>
            <div className="text-subtitle text-semibold">
              Let us help with your fitness and wellness journey.
            </div>
          </div>

          <Form className="mx-5 mt-4">
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label className="text-normal text-medium">
                    First Name
                  </Form.Label>
                  <Form.Control
                    className="custom-input"
                    type="email"
                    placeholder="First name"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label className="text-normal text-medium">
                    Last Name
                  </Form.Label>
                  <Form.Control
                    className="custom-input"
                    type="email"
                    placeholder="Last name"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label className="text-normal text-medium">
                Email address
              </Form.Label>
              <Form.Control
                className="custom-input"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-normal text-medium">
                Password
              </Form.Label>
              <Form.Control
                className="custom-input"
                type="password"
                placeholder="Enter password"
              />
            </Form.Group>

            <Form.Check
              inline
              label="Yes, I understand and agree to the Foode Terms of Service."
              name="group1"
              type="checkbox"
            />
          </Form>

          <Row className="mx-5 mt-5">
            <Button className="primary-btn text-semibold text-title py-2 text-medium">
              Log In
            </Button>
          </Row>

          <div className="text-center mt-2 text-medium text-semibold">
            Already have an account?{" "}
            <span className="text-accent text-semibold">Log in</span>
          </div>
        </div>
      </Col>

      <Col md={5} className="pl-0 pr-0">
        <Image src={BgImageRight} className="img-fluid vh-100 w-100" />
      </Col>
    </Row>
  );
}

export default SignUp;
