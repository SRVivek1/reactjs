import "./MainPage.css";
import React from "react";
import Navbar from "./Navbar";
import PageFooter from "./PageFooter";
import AppLinks from "./AppLinks";
import TextForm from "./TextForm";
import AdvRightCenterCorner from "./AdvRightCenterCorner";
import AdvRightTopCorner from "./AdvRightTopCorner";

const MainPage = () => {
    {/**https://www.youtube.com/watch?v=Ny7LkAt4btI */}
  return (
    <React.Fragment>
      <section>
        <div className="pageLayout text-2xl text-white">
          <div className="navbar centered">
            <Navbar />
          </div>
          <div className="pageFooter centered">
            <PageFooter />
          </div>
          <div className="appLinks centered">
            <AppLinks />
          </div>
          <div className="textForm centered">
            <TextForm />
          </div>
          <div className="advRightTopCorner centered">
            <AdvRightTopCorner />
          </div>
          <div className="advRightCenterCorner centered">
            <AdvRightCenterCorner />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MainPage;
