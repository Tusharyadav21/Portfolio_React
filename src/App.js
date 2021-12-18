import React from "react";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productlist/ProductList";
import Contacts from "./components/contacts/Contacts";
import Toggle from "./components/toggle/Toggle";
// import Footer from "./components/footer/Footer";
import { ThemeContext } from "./context";
import { useContext } from "react";
// import Skills from "./components/skills/Skills";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
    <div style={{ backgroundColor: darkMode ? "#222" : "White", color: darkMode && "white", }}>
      <Toggle />
      <Intro />
      <About />
      {/* <Skills /> */}
      <ProductList />
      <Contacts />
      {/* <Footer /> */}
    </div>
    </>
  )
};

export default App;