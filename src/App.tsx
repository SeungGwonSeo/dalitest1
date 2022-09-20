import React from "react";
import GlobalStyles from "./GlobalStyled";
import {hot} from 'react-hot-loader';

import Slider from "./Slider";

const App = () => (
  <>
    <Slider />
    <GlobalStyles />
  </>
);

export default hot(module)(App);