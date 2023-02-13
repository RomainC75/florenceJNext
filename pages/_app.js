import "../styles/app.css";
import "../styles/IndexHomePage.css";
import "../components/styles/navbar.css"
import "../components/styles/Carousel.css"
import "../components/sections/styles/Home1.css"
import "../components/sections/styles/Home2.css"
import "../components/styles/Footer.css"
import "../components/styles/AnimatedHeaders.css"
import "../components/styles/SubPageHeader.css"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* DM */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&display=swap"
          rel="stylesheet"
        />
        {/* NUNITO */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;900&display=swap"
          rel="stylesheet"
        />
        {/* ANTIC DIDONE  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Antic+Didone&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
