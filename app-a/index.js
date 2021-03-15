import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider, teamsTheme, Flex, Text } from "@fluentui/react-northstar";

function App() {
  return (
    <Provider theme={teamsTheme}>
      <Flex>Black flex</Flex>
      <Flex column inline>
        Black flex
      </Flex>

      <Text color="red">Red text</Text>
    </Provider>
  );
}

export function renderA(node) {
  ReactDOM.render(<App />, node);

  return () => {
    ReactDOM.unmountComponentAtNode(node);
  };
}
