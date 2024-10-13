import AnnouncementBar from "../../components/AnnouncementBar/AnnouncementBar";
import Arrivals from "../../components/Arrivals/Arrivals";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Vitrine from "../../components/Vitrine/Vitrine";

const Homepage = () => {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Arrivals />
        <Vitrine />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
