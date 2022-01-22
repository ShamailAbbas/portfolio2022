import React from "react";
import "../css/contacts.css";
import { AiFillGithub } from "react-icons/ai";
import { HiPhoneMissedCall } from "react-icons/hi";
import { SiGmail } from "react-icons/si";
const Contact = () => {
  return (
    <>
      <h2 className="contactheading">Contacts</h2>
      <div className="contactscontainer">
        <li className="contacts">
          <SiGmail
            style={{ color: "red", marginBottom: "-5px", marginRight: "5px" }}
            size={20}
          />
          shamailabbas61@gmail.com
        </li>
        <li className="contacts">
          <HiPhoneMissedCall
            style={{ color: "green", marginBottom: "-5px", marginRight: "5px" }}
            size={20}
          />
          +923255918656
        </li>

        <li className="contacts">
          <a
            href="https://github.com/ShamailAbbas"
            rel="noreferrer"
            target="_blank"
            className="btnlink"
          >
            <AiFillGithub
              style={{
                color: "black",
                marginBottom: "-5px",
                marginRight: "5px",
              }}
              size={20}
            />
            Github
          </a>
        </li>
      </div>
    </>
  );
};

export default Contact;
