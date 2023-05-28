import * as React from "react";
// import { Link } from "gatsby";
import Component1 from "../components/component1";
import Component2 from "../components/component2";
import Component3 from "../components/component3";
import Component4 from "../components/component4";
import Footer from "../components/footer";
import Header from "../components/header";
import MainComponent from "../components/mcomponent";

export default function Index() {
  return (
    <main className="flex flex-col bg-white px-2 pt-24 sm:pt-32 lg:px-8 mx-auto max-w-7xl">
      <Header />
      <MainComponent />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Footer />
    </main>
  );
}

export const Head = () => <title>Gatsby/Tailwind Product Template</title>;
