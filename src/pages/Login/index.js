import React from "react";
import "./style.css";
import MainLogo from "../../assets/Logo.png";
import BgImageLeft from "../../assets/login_page_assets/left_Side.png";
import BgImageRight from "../../assets/login_page_assets/right_Side.png";
import GoogleIcon from "../../assets/login_page_assets/google_Icon.png";
import AppleIcon from "../../assets/login_page_assets/apple_Icon.png";
import { Col, Row, Image, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();

  return (
    <Row>
      <Col md={7} className="pl-0 pr-0">
        {/* <Image src={BgImageLeft} className="img-fluid vh-100 w-100" /> */}
        <div className="px-5 pt-2">
          <Image src={MainLogo} className="img-fluid" width={180} />

          <div className="my-4">
            <div className="text-title text-semibold">Log in</div>
            <div className="text-subtitle text-semibold">
              Let us help with your fitness and wellness journey.
            </div>
          </div>

          <Col className="text-center mx-5 mt-4">
            <Row className="mb-3">
              <Button className="sub-btns text-semibold text-title">
                <Image src={GoogleIcon} className="img-fluid m-2" width={15} />
                Continue with Google
              </Button>
            </Row>
            <Row>
              <Button className="sub-btns text-semibold text-title">
                <Image src={AppleIcon} className="img-fluid m-2" width={15} />
                Continue with Apple
              </Button>
            </Row>
          </Col>

          <Row className="justify-content-center align-items-center mt-3 mx-1">
            <Col md={5}>
              <hr className="divider" />
            </Col>
            <Col md={1}>
              <div className="text-semibold">or</div>
            </Col>
            <Col md={5}>
              <hr className="divider" />
            </Col>
          </Row>

          <Form className="mx-5 mt-4">
            <Form.Group className="mb-3">
              <Form.Label className="text-normal text-medium">
                Email address
              </Form.Label>
              <Form.Control
                className="custom-input"
                type="email"
                placeholder="Enter Email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-normal text-medium">
                Password
              </Form.Label>
              <Form.Control
                className="custom-input"
                type="password"
                placeholder="Enter Password"
              />
            </Form.Group>
          </Form>

          <Row className="mx-5 mt-5">
            <Button
              onClick={() => navigate("/")}
              className="primary-btn text-semibold text-title py-2 text-medium"
            >
              Log In
            </Button>
          </Row>

          <div className="text-center mt-2 text-medium text-semibold">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/sign-up")}
              className="text-accent text-semibold"
            >
              Sign Up Now
            </span>
          </div>
        </div>
      </Col>

      <Col md={5} className="pl-0 pr-0">
        <Image src={BgImageRight} className="img-fluid vh-100 w-100" />
      </Col>
    </Row>
  );
}

export default Login;
