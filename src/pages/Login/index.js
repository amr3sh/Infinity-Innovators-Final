import React from "react";
import "./style.css";
import MainLogo from "../../assets/Logo.png";
import BgImageLeft from "../../assets/login_page_assets/left_Side.png";
import BgImageRight from "../../assets/login_page_assets/right_Side.png";
import GoogleIcon from "../../assets/login_page_assets/google_Icon.png";
import { Col, Row, Image, Button } from "react-bootstrap";

function Login() {
  return (
    <div className="vh-100">
      <Row>
        <Col md={6}>
          {/* <Image src={BgImageLeft} className="img-fluid vh-100 w-100" /> */}
          <Image src={MainLogo} className="img-fluid" />
          <div>Log in</div>
          <div>Let us help with your fitness and wellness journey.</div>
          
          <Col>
            <Button>Continue with Google</Button>
            <Button>Continue with Apple</Button>
          </Col>
        </Col>

        <Col md={6}>
          <Image src={BgImageRight} className="img-fluid vh-100 w-100" />
        </Col>
      </Row>
    </div>
  );
}

export default Login;
