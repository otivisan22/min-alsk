import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: `#fff`,
  fontColour: `#000`,
};

export const darkTheme = {
  body: `#000`,
  fontColour: `#fff`,
};

export const GlobalStyles = createGlobalStyle`
body {
  
  background-color: ${(props) => props.theme.body};
}
`;
