import React from "react";
import Feed from "./Feed/Feed";
import Head from "./Helper/Head";

const Home = () => (
  <section className="container mainContainer">
    <Head
      title="Photos"
      description="Home do site Dogs, com o feed de photos."
    />
    <Feed />
  </section>
);

export default Home;
