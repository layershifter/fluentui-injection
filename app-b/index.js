import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider, teamsTheme, Flex, Text } from "@fluentui/react-northstar";

function App() {
  return (
    <Provider theme={teamsTheme}>
      <Flex>Black flex</Flex>
      <Flex column>Black flex</Flex>

      <Text color="green">Green text</Text>
      <Text color="brand">Brand text</Text>
    </Provider>
  );
}

export function renderB(node) {
  ReactDOM.render(<App />, node);

  return () => {
    ReactDOM.unmountComponentAtNode(node);
  };
}
