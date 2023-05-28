import * as React from "react";
import Header from "../components/header";
import ContactComponent from "../components/componentcontact";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <main className="flex flex-col bg-white px-2 pt-24 sm:pt-32 lg:px-8 mx-auto max-w-7xl">
      <Header />
      <ContactComponent />
      <Footer />
    </main>
  );
}
export const Head = () => <title>Contact Us Page</title>;
