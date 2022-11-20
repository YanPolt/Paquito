import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Dropdown from "react-bootstrap/Dropdown";

import bannerLogo from "../assets/images/banner_logo.png";

function Header() {
  var userLang = (navigator.language || navigator.userLanguage)
    .toString()
    .split("-")[0];
  const [language, setLanguage] = useState(userLang.toUpperCase());

  const [t, i18n] = useTranslation("global");

  return (
    <div id="div-header">
      <nav className="navbar navbar-custom" id="navbar">
        <a className="navbar-brand" href="#">
          <img
            src={bannerLogo}
            class="d-inline-block align-top"
            alt="Logo del Software Paquito"
            id="header-img-banner-logo"
          />
        </a>

        <Dropdown>
          <Dropdown.Toggle
            variant="info dropdown-custom text-dark border-dark border-2"
            id="dropdown-language"
          >
            {language}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              href="#/action-1"
              onClick={() => {
                i18n.changeLanguage("es");
                setLanguage("ES");
              }}
            >
              {t("header.espanol")}
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-2"
              onClick={() => {
                i18n.changeLanguage("en");
                setLanguage("EN");
              }}
            >
              {t("header.ingles")}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </div>
  );
}

export default Header;
