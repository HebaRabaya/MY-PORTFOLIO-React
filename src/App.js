import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Progress from "./components/common/Progress";
import Effects from "./components/effects/Effects";
import Notify from "./components/common/Notify";
import ScrollUp from "./components/common/ScrollUp";
import "./styles/Common.css";
import "./index.css";

function App() {
  const [notifs, setNotifs] = useState([]);

  const addNotif = (msg, type = "info") => {
    const id = Date.now();
    setNotifs((prev) => [...prev, { id, message: msg, type }]);
  };

  const removeNotif = (id) => {
    setNotifs((prev) => prev.filter((notif) => notif.id !== id));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      addNotif("Welcome to Heba Rabaya's portfolio! 🌸", "success");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Progress />
      <Effects />
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollUp />
      {notifs.map((notif) => (
        <Notify
          key={notif.id}
          message={notif.message}
          type={notif.type}
          onClose={() => removeNotif(notif.id)}
        />
      ))}
    </>
  );
}

export default App;
