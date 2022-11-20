import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Internationalization
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./assets/translations/es/global.json";
import global_en from "./assets/translations/en/global.json";
import global_fr from "./assets/translations/fr/global.json";

var userLang = (navigator.language || navigator.userLanguage)
  .toString()
  .split("-")[0];

i18next.init({
  interpolation: { escapeValue: false },
  lng: userLang,
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
    fr: {
      global: global_fr,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
