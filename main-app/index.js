import * as React from "react";
import * as ReactDOM from "react-dom";

import { renderA } from "AppA";
import { renderB } from "AppB";

function App() {
  const tabA = React.useRef();
  const tabB = React.useRef();

  React.useLayoutEffect(() => {
    renderA(tabA.current);
    renderB(tabB.current);
  }, []);

  return (
    <div style={{ border: "2px solid red", margin: "20px", padding: "10px" }}>
      <div
        style={{ border: "2px solid grey", margin: "20px", padding: "10px" }}
        ref={tabA}
      />
      <div
        style={{ border: "2px solid grey", margin: "20px", padding: "10px" }}
        ref={tabB}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
