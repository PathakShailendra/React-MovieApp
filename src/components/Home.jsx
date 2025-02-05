import React from "react";
import Sidenav from "./Partials/Sidenav";
import Topnav from "./partials/Topnav";

const Home = () => {
  return (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
      </div>
    </>
  );
};

export default Home;
