import AnnouncementBar from "../../components/AnnouncementBar/AnnouncementBar";
import Arrivals from "../../components/Arrivals/Arrivals";
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
    </>
  );
};

export default Homepage;
