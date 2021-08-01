import React from "react";
import Header from "./Header";
import Us from "./Us";
import OurFields from "./OurFields";
import ContactForm from "../../components/Reuseable/ContactForm";

function Home(props) {
  return (
    <div>
      <Header />
      <Us />
      <OurFields />
    </div>
  );
}

export default Home;
