import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <div className="contact-section   rounded-ss-[85px] bg-[#2b2a33] py-16 pl-8 pr-2 min-[450px]:rounded-ss-[200px] min-[450px]:pl-16 min-[450px]:pt-24  ">
      <div className="mx-auto grid gap-y-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5   ">
        <div className="logo-social space-y-3">
          <div className="logo flex items-center gap-x-1 ">
            <img src="images//MARA.png" alt="mara logo" />
            <h1 className="mt-1 text-2xl">travel</h1>
          </div>
          <p className="max-w-[250px] pr-8 font-light text-gray-200">
            Let us be your gateway to the captivating beauty and diversity of
            Ethiopia.
          </p>
          <div className="social flex gap-x-3">
            <a
              href="https://www.facebook.com/profile.php?id=100069558991672"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook"
            >
              <FaFacebookF size={25} />
            </a>

            <a
              href="https://www.instagram.com/nahomrak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={25} />
            </a>

            <a
              href="https://twitter.com/rakkpoper"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/nahom-abraham-460656286/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={25} />
            </a>
          </div>
        </div>

        <div className="helpful-links">
          <h1 className="tittle  mb-2      text-3xl font-extrabold  text-[#64c6e5]  ">
            Helpful Links
          </h1>
          <ul className="space-y-2">
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">How to Reserve</a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="information">
          <h1 className="tittle  mb-2 text-3xl font-extrabold    text-[#64c6e5]   ">
            Information
          </h1>

          <ul className="space-y-2">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Copyright Notice</a>
            </li>
          </ul>
        </div>

        <div className="contact">
          <h1 className="tittle  mb-2 text-3xl font-extrabold    text-[#64c6e5]   ">
            Contact
          </h1>
          <ul className="caleb mt-4 space-y-2">
            <li className="flex items-center gap-x-2 text-sm ">
              <IoMdCall size={25} />
              <a href="tel:+25172665987">+25172665987</a>
            </li>
            <li className="flex items-center gap-x-2 text-sm">
              <IoMdMail size={25} />
              <a href="mailto:Kalebtesfaye81@gmail.com">
                Kalebtesfaye81@gmail.com
              </a>
            </li>
          </ul>
          <ul className="nahom  mt-6 space-y-2">
            <li className="flex items-center gap-x-2 text-sm ">
              <IoMdCall size={25} />

              <a href="tel:+251921607264">+251921607264</a>
            </li>
            <li className="flex items-center gap-x-2 text-sm">
              <IoMdMail size={25} />
              <a href="mailto:nahomabrahamofficial@gmail.com">
                nahomabrahamofficial@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="payment">
          <h1 className="tittle  mb-2 text-3xl font-extrabold    text-[#64c6e5]   ">
            Payment
          </h1>
          <div className="payment-logo grid max-w-[320px] grid-cols-2 items-center">
            <a
              href="https://www.paypal.com/an/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-[100px]"
                src="images/PayPal New 2023.svg"
                alt=""
              />
            </a>
            <a
              href="https://m-pesa.safaricom.et/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-[100px]" src="images/MPESA LOGO.png" alt="" />
            </a>
            <a
              href="https://coopbankoromia.com.et/e-banking-2-3/e-banking/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-[90px]"
                src="images/Cooperative Bank of Oromia Logo.svg"
                alt=""
              />
            </a>
            <a
              href="https://chapa.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-[100px]" src="images/Chapa_Logo.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
