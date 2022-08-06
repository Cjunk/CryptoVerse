import React from "react";
import ReactDOM from "react-dom";
import Loading from "../components/loading";

it("renders without crashing", () => {
  const div = document.createElement("root");
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  ReactDOM.render(<Loading />, div);
});
