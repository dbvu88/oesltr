import React from "react";
import Schedule from "./schedule";
import Instruction from "./instruction";
import Introduction from "./intro";
import Mission from "./mission";
function Component() {
  return (
    <div className="wrapper">
      <div className="container">
        <div
          className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"
          // style={{
          //   fontFamily: "David Libre, serif"
          // }}
        >
          <Introduction />
          <Schedule />
          <Instruction />
          <Mission />
        </div>
      </div>
    </div>
  );
}

export default Component;
