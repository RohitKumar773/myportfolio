import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function Layout() {
  return (
    <>
      <div className="w-full h-auto bg-stone-900">
        <Header />
        <Outlet />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
