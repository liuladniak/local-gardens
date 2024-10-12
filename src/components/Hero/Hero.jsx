import "./Hero.scss";
import sparklesIcon from "../../assets/icons/SVG/sparkles.svg";
import searchIcon from "../../assets/icons/SVG/search.svg";
import userIcon from "../../assets/icons/SVG/user.svg";
import cartIcon from "../../assets/icons/SVG/shopping-cart.svg";
import bgVideo from "../../assets/videos/pexels-teona-swift-6841962.mp4";

const Hero = () => {
  return (
    <section className="section--hero">
      <div className="nav--container">
        <div className="empty"></div>
        <div className="logo__container flex--middle">
          <a href="#" className="logo__link">
            LOCAL
            <img src={sparklesIcon} alt="Sparkles Icon" className="sparkles" />
            GARDENS
          </a>
        </div>
        <nav className="nav--secondary">
          <button className="btn btn__search">
            <img className="icon icon__search" src={searchIcon} />
          </button>
          <button className="btn btn__user">
            <img className="icon icon__user" src={userIcon} />
          </button>
          <button className="btn btn__shopping-cart">
            <img className="icon icon__shopping-cart" src={cartIcon}></img>
          </button>
        </nav>
      </div>

      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>

      <div className="hero__content">
        <p className="heading--small">small updates, big impact</p>
        <h1 className="heading--main">Authentic Accents</h1>
        <a href="#" className="heading--btn">
          shop the edit
        </a>
      </div>
    </section>
  );
};

export default Hero;
