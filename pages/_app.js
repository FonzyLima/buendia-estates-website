import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "boxicons/css/boxicons.css";
import * as React from "react";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MessengerCustomerChat from "react-messenger-customer-chat";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </head>
      <Navbar />
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
      <MessengerCustomerChat
        pageId="107801160795209"
        appId="1524224601298273"
      />
      ,
      <Contact />
    </>
  );
}

export default MyApp;
