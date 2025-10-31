import React, { useState } from "react"; // استيراد React ومكتبة useState لإدارة الحالة
import { DataProvider } from "./contexts/DataContext"; // استيراد مقدم البيانات
import Header from "./components/Header"; // ✅ تم تصحيح المسار
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer"; // ✅ تم تصحيح المسار
import Progress from "./components/common/Progress";
import Particles from "./components/effects/Effects";
import Notify from "./components/common/Notify";
import ScrollUp from "./components/common/ScrollUp";
import Effects from "./components/effects/Effects"; // ✅ تم تصحيح المسار
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

  React.useEffect(() => {
    const timer = setTimeout(() => {
      addNotif("Welcome to Heba Rabaya's website! 🎉", "success");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <DataProvider>
      <Progress />
      <Particles />
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollUp />
      <Effects />
      {notifs.map((notif) => (
        <Notify
          key={notif.id}
          message={notif.message}
          type={notif.type}
          onClose={() => removeNotif(notif.id)}
        />
      ))}
    </DataProvider>
  );
}

export default App;
