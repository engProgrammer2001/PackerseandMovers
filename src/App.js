import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ContactUsPage from "./pages/Contact/ContactUsPage";
import Services from "./pages/Services/Services";
import MooveNoida from "./components/services/mooveNoida";
import MoveGurgaon from "./components/services/MoveGurgaon";
import MoveDelhi from "./components/services/MoveDelhi";
import MoveFaridabad from "./components/services/MoveFaridabad";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/our-service" element={<Services />} />
        <Route path="/services/move-gurgaon" element={<MoveGurgaon />} />
        <Route path="/services/move-noida" element={<MooveNoida />} />
        <Route path="/services/move-delhi" element={<MoveDelhi />} />
        <Route path="/services/move-faridabad" element={<MoveFaridabad />} />
        <Route path="*" element={<Home />} /> 

      </Routes>
      <Footer />
    </div>
  );
}
export default App;
