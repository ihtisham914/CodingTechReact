import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import Modal from "./components/modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  if (showModal) document.body.classList.add("hidden");
  else document.body.classList.remove("hidden");
  return (
    <div className="App">
      <Header onShow={() => setShowModal(!showModal)} />
      <HeroSection />
      <ServiceSection onShow={() => setShowModal(!showModal)} />
      <TeamSection />
      {showModal && <Modal onShow={() => setShowModal(!showModal)} />}
      <Footer />
    </div>
  );
}

export default App;
