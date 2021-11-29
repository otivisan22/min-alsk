import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";

import { lightTheme, darkTheme, GlobalStyles } from "./theme.js";
import NavigationBar from "./components/NavigationBar";
import Routes from "./Routes";

import "./App.css";

const client = new ApolloClient({
  uri: process.env.GRAPHQL_URL || "http://localhost:3000/",
  cache: new InMemoryCache(),
});

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === `light` ? setTheme(`dark`) : setTheme(`light`);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles></GlobalStyles>
      <StyledApp>
        <ApolloProvider client={client}>
          <Router>
            <NavigationBar />
            <Routes />
          </Router>
        </ApolloProvider>
        Hej
        <button onClick={() => themeToggler()}></button>
      </StyledApp>{" "}
    </ThemeProvider>
  );
}

export default App;
