import * as React from "react";
import Component1 from "../components/component1";
import Component2 from "../components/component2";
import Component3 from "../components/component3";
// import Component4 from "../components/component4";
import Component5 from "../components/component5";
import Component6 from "../components/component6";
import Footer from "../components/footer";
import Header from "../components/header";
import MainComponent from "../components/mcomponent";

export default function Index() {
  return (
    <main className="flex flex-col bg-white mx-auto max-w-7xl">
      <Header />
      <MainComponent />
      <Component5 />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component6 />
      <Footer />
    </main>
  );
}

export const Head = () => <title>Gatsby/Tailwind Product Template</title>;
