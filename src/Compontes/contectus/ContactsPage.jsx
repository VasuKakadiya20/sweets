import React from "react";
import "./ContactsPage.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import contectimg from "../../assets/contect.jpg"
import Contectusbox from "./contectusbox";
import useScrollAnimation from "../useScrollAnimation";

export default function ContactsPage() {
  useScrollAnimation()
  return (
    <>
      <div className="contact-banner slideU">
        <div className="overlay"></div>
        <div className="wave-top"></div>
        <div className="content">
          <h1>Contacts</h1>
          <div className="breadcrumb">
            <a href="/" className="text-[#c19b5a] font-bold text-sm">Home</a>
            <span className="font-bold text-sm text-white">//</span>
            <span className="font-bold text-sm text-white">Contacts</span>
          </div>
        </div>
      </div>

      <section className="w-full py-20 bg-white ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 slideU">
          <div className="relative">
            <img
              src={contectimg}
              alt="Chocolate"
              className="rounded-lg w-full object-cover shadow-md"
            />
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-[#c19b5a] mb-2 border-l-4 border-[#c19b5a] pl-3">
              OUR CONTACTS
            </p>

            <h2 className="text-3xl font-serif font-bold text-gray-900 leading-snug mb-4">
              NEED TREATS? GET IN<br />
              TOUCH WITH US
            </h2>

            <p className="text-gray-600 mb-8">
              Get in touch to discuss your employee wellbeing needs today.
              Please give us a call, drop us an email.
            </p>

            <div className="flex items-start gap-4 mb-5 transition-transform duration-300 ">
              <FaMapMarkerAlt className="text-[#c19b5a] text-xl" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-600 text-sm"> 34 Gandhi Road,Surat.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-5">
              <FaPhoneAlt className="text-[#c19b5a] text-xl" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600 text-sm"> +91 99461 37919</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <FaEnvelope className="text-[#c19b5a] text-xl" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600 text-sm">Info@Dairy.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                className="w-10 h-10 border rounded-full flex justify-center items-center hover:bg-[#c19b5a] hover:text-white transition"
              >
                <Link to={"https://telegram.org/"}><FaPaperPlane className="text-lg" /></Link>
              </button>
              <button
                className="w-10 h-10 border rounded-full flex justify-center items-center hover:bg-[#c19b5a] hover:text-white transition"
              >
                <Link to={"https://www.facebook.com/"}><FaFacebookF className="text-lg" /></Link>
              </button>
              <button
                className="w-10 h-10 border rounded-full flex justify-center items-center hover:bg-[#c19b5a] hover:text-white transition"
              >
                <Link to={"https://x.com/"}><FaTwitter className="text-lg" /></Link>
              </button>
              <button
                className="w-10 h-10 border rounded-full flex justify-center items-center hover:bg-[#c19b5a] hover:text-white transition"
              >
                <Link to={"https://www.instagram.com/"}><FaInstagram className="text-lg" /></Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-[500px] relative mb-5 slideU">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238180.9166140213!2d72.73537647745898!3d21.129430990993836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1764668364246!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <Contectusbox />
    </>
  );
}
