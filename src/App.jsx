import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import NewsLetter from "./components/newsletter/NewsLetter";
import Benefits from "./components/SectionBenefits/Benefits";
import Contact from "./components/SectionContact/Contact";
import Role from "./components/SectionRole/Role";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Banner></Banner>
      <Role></Role>
      <Benefits></Benefits>
      <NewsLetter></NewsLetter>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
