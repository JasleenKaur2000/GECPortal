import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/Routes";
import { Provider } from "react-redux";
import Store from "./src/redux/Store";

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
