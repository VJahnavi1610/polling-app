import React from "react";
import Poll from "./Poll";

const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🗳 Poll Voting App</h1>
      <Poll />
    </div>
  );
};

export default App;