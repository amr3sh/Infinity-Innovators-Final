import { Button, Col, Image, Row } from "react-bootstrap";
import MainLogo from "../../assets/Logo.png";
import Bowl1 from "../../assets/landing_page_assets/bowl.png";
import Plate1 from "../../assets/landing_page_assets/plate1.png";
import Plate2 from "../../assets/landing_page_assets/plate2.png";
import Plate3 from "../../assets/landing_page_assets/plate3.png";
import Plate4 from "../../assets/landing_page_assets/plate4.png";
import Time from "../../assets/landing_page_assets/time.png";
import Location from "../../assets/landing_page_assets/location.png";
import Call from "../../assets/landing_page_assets/call.png";
import Search from "../../assets/landing_page_assets/search.png";
import Settings from "../../assets/landing_page_assets/settings.png";
import Cart from "../../assets/landing_page_assets/cart.png";
import Delivery from "../../assets/landing_page_assets/delivery.png";
import RightArrow from "../../assets/landing_page_assets/right-arrow.png";
import Worker1 from "../../assets/landing_page_assets/worker1.jpg";
import Worker2 from "../../assets/landing_page_assets/worker2.jpg";
import Worker3 from "../../assets/landing_page_assets/worker3.png";
import Worker4 from "../../assets/landing_page_assets/worker4.jpg";
import Worker5 from "../../assets/landing_page_assets/worker5.png";
import Worker6 from "../../assets/landing_page_assets/worker6.png";
import Insta from "../../assets/landing_page_assets/insta.png";
import Twitter from "../../assets/landing_page_assets/twitter.png";
import Tiktok from "../../assets/landing_page_assets/tiktok.png";
import Facebook from "../../assets/landing_page_assets/facebook.png";
import { Link } from "react-router-dom";
import "./style.css";

const LandingPage = () => {
  return (
    <div className="bg">
      {/* Header */}
      <div className="header">
        <div className="left">
          <Image src={MainLogo} className="img-fluid" width={180} />
        </div>
        <div className="middle">
          <Link className="link">Home</Link>
          <Link className="link">Foods</Link>
          <Link className="link">Restaurants</Link>
          <Link className="link">My Cart</Link>
          <Link className="link">Log In</Link>
        </div>
        <div className="d-flex gap-3">
          <Button className="primary-btn text-semibold text-title py-2 text-medium">
            Sign Up
          </Button>

          <Button className="secondary-btn text-semibold text-title py-2 text-medium">
            Log In
          </Button>
        </div>
      </div>

      <div className="body d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center col-8">
          <div className="d-flex flex-column col-6">
            <div className=" text-normal text-large">
              <div className="body-header mb-3">
                Discover Healthy Meals for Every Taste
              </div>
              Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit.
            </div>
            <Button className="d-flex align-items-center justify-content-center primary-btn text-semibold text-title py-2 mt-4 text-medium gap-3 col-4">
              Order Now
              <Image src={RightArrow} className="img-fluid" width={14} />
            </Button>
          </div>
          <div className="d-flex">
            <Image src={Bowl1} className="img-fluid" width={450} />
          </div>
        </div>

        <div className="d-flex justify-content-center align-align-items-center gap-5 my-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Image
              src={Time}
              className="img-fluid object-fit-contain mb-3"
              width={50}
            />
            <div className=" text-semibold text-medium">
              Mon - Fri (10 AM - 8 PM)
            </div>
            <div className="text-normal text-small text-subtitle">
              Available Hours
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Image
              src={Location}
              className="img-fluid  object-fit-contain mb-3"
              width={40}
            />
            <div className=" text-semibold text-medium">
              37th Lane, Colombo 06
            </div>
            <div className="text-normal text-small text-subtitle">
              Our Location
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Image
              src={Call}
              className="img-fluid  object-fit-contain mb-3"
              width={50}
            />
            <div className=" text-semibold text-medium">+94 76 016 7726</div>
            <div className="text-normal text-small text-subtitle">
              Reach Out to Us
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-align-items-center mt-5">
        <div className="d-flex justify-content-center align-items-center col-8">
          <div className="d-flex flex-column col-6">
            <Image src={Bowl1} className="img-fluid" width={350} />
            <div className="d-flex">
              <Image src={Plate1} className="img-fluid" width={100} />
              <Image src={Plate2} className="img-fluid" width={100} />
              <Image src={Plate3} className="img-fluid" width={100} />
              <Image src={Plate4} className="img-fluid" width={100} />
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className=" text-normal text-large">
              <div className="text-accent text-semibold">Featured Meals</div>
              <div className="body-header mb-3">
                Indulge in Health, Savor the Flavors!
              </div>
              Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit.
            </div>

            <Button className="d-flex align-items-center justify-content-center primary-btn text-semibold text-title py-2 mt-4 text-medium gap-3 col-5">
              Browse Meals
              <Image src={RightArrow} className="img-fluid" width={14} />
            </Button>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-align-items-center mt-5">
        <div className="d-flex flex-column justify-content-center align-align-items-center col-8">
          <div className="text-center body-header mb-4 mt-5">How it works?</div>
          <div className="text-center text-normal mb-4">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit.
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-align-items-center gap-3 my-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Image
            src={Search}
            className="img-fluid object-fit-contain mb-3"
            width={50}
          />
          <div className=" text-semibold text-medium">Browse and Discover</div>
          <div className="text-normal text-ex-small text-subtitle px-3 text-center">
            Users can explore a wide variety of healthy meal options from our
            partner restaurants.
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Image
            src={Settings}
            className="img-fluid  object-fit-contain mb-3"
            width={60}
          />
          <div className=" text-semibold text-medium">
            Customize and Personalize
          </div>
          <div className="text-normal text-ex-small text-subtitle px-3 text-center">
            Customers can customize their chosen meals. They can modify or
            select substitutes to make the meal just right for them.
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Image
            src={Cart}
            className="img-fluid  object-fit-contain mb-3"
            width={50}
          />
          <div className=" text-semibold text-medium">
            Add to Cart and Review
          </div>
          <div className="text-normal text-ex-small text-subtitle px-3 text-center">
            Once the desired meal is selected, users can add it to their cart.
            They can review their order, and see an overview of the total price.
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Image
            src={Delivery}
            className="img-fluid  object-fit-contain mb-3"
            width={50}
          />
          <div className=" text-semibold text-medium">
            Checkout and Delivery
          </div>
          <div className="text-normal text-ex-small text-subtitle px-3 text-center">
            Customers can proceed to checkout, where they select a convenient
            delivery time, and make payment.
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-align-items-center mt-5 pt-5">
        <div className="d-flex justify-content-center align-items-center col-8 gap-5">
          <div className="d-flex flex-column">
            <div className=" text-normal text-large">
              <div className="text-accent text-semibold">About Us</div>
              <div className="body-header mb-3">What sets us apart</div>
              At Foode, our mission is to revolutionize the way people approach
              healthy eating. We believe that everyone deserves access to
              nutritious and delicious meals without compromising on taste or
              convenience. With Foode, you can discover a wide selection of
              restaurants and meals that cater to your health goals, making it
              easier than ever to maintain a balanced diet. <br /> <br />
              At Foode, we believe that healthy eating should be accessible to
              all. Whether you're a busy professional, a fitness enthusiast, or
              someone looking to make positive dietary changes, we're here to
              support you on your journey towards a healthier lifestyle. Join us
              today and experience the joy of nourishing your body with
              delicious and nutritious meals.
            </div>
          </div>

          <div className="d-flex flex-column col-6">
            <div className="d-flex gap-3 overflow-scroll">
              <Image src={Worker1} className="img-fluid thumb" width={250} />
              <Image src={Worker2} className="img-fluid thumb" width={250} />
              <Image src={Worker3} className="img-fluid thumb" width={250} />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-align-items-center mt-5">
        <div className="d-flex flex-column justify-content-center align-align-items-center col-8">
          <div className="text-center body-header mb-4 mt-5">Testimonials</div>
          <div className="d-flex gap-5">
            <div className="d-flex flex-column justify-content-center align-items-center green-card">
              <Image
                src={Worker4}
                rounded
                className="img-fluid rounded object-fit-contain mb-3"
                width={50}
              />
              <div className=" text-semibold text-medium">Aria Patel</div>
              <div className="text-normal text-ex-small px-3 text-center">
                Foode has been a game-changer for me! As a busy professional,
                it's challenging to find time to cook healthy meals. With Foode,
                I can easily order nutritious meals from local restaurants with
                just a few clicks.
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center green-card">
              <Image
                src={Worker5}
                rounded
                className="img-fluid rounded object-fit-contain mb-3"
                width={50}
              />
              <div className=" text-semibold text-medium">Aria Patel</div>
              <div className="text-normal text-ex-small px-3 text-center">
                Foode has been a game-changer for me! As a busy professional,
                it's challenging to find time to cook healthy meals. With Foode,
                I can easily order nutritious meals from local restaurants with
                just a few clicks.
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center green-card">
              <Image
                src={Worker6}
                rounded
                className="img-fluid rounded object-fit-contain mb-3"
                width={50}
              />
              <div className=" text-semibold text-medium">Aria Patel</div>
              <div className="text-normal text-ex-small px-3 text-center">
                Foode has been a game-changer for me! As a busy professional,
                it's challenging to find time to cook healthy meals. With Foode,
                I can easily order nutritious meals from local restaurants with
                just a few clicks.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column justify-content-center align-align-items-center mt-5">
        <div className="text-center body-header mt-5">Subscribe</div>
        <div className="text-center text-title mb-4">
          to our newsletter to stay updated.
        </div>
      </div>

      {/* Footer */}
      <div className="footer-full px-4">
        <div className="footer">
          <Image src={MainLogo} className="img-fluid" width={180} />
          <div className="right d-flex gap-4">
            <div className="d-flex flex-column">
              <div className="text-white mb-3">Support</div>
              <div className="text-white mb-2">Faq</div>
              <div className="text-white mb-2">Shipping</div>
              <div className="text-white mb-2">Our Partners</div>
              <div className="text-white mb-2">Help</div>
            </div>
            <div className="d-flex flex-column mx-5">
              <div className="text-white mb-3">Dates</div>
              <div className="text-white mb-2">Parties</div>
              <div className="text-white mb-2">Birthdays</div>
              <div className="text-white mb-2">Menu</div>
            </div>
            <div className="d-flex flex-column">
              <div className="text-white mb-3">Contact</div>
              <div className="text-white mb-2">
                No 10, Alcott avenue,37th Lane, Colombo 06
              </div>
              <div className="text-white mb-2">foode@gmail.com</div>
              <div className="text-white mb-2">+94 76 016 7726</div>
            </div>
          </div>
        </div>

        <hr />
        <div className="d-flex gap-3 mb-3">
          <Image src={Insta} className="img-fluid" width={12} />
          <Image src={Facebook} className="img-fluid" width={12} />
          <Image src={Twitter} className="img-fluid" width={12} />
          <Image src={Tiktok} className="img-fluid" width={12} />
        </div>

        <div className="d-flex gap-4 align-items-center">
          <div className="text-white">Privacy Notice</div>
          <hr className="vr text-white" />
          <div className="text-white">Terms of Use</div>
          <hr className="vr text-white" />
          <div className="text-white"> CA Supply Chain Act</div>
          <hr className="vr text-white" />
          <div className="text-white"> Cookie Preference</div>
        </div>

        <div className="text-white">© 2023 Foode. All rights reserved.</div>
      </div>
    </div>
  );
};

export default LandingPage;
