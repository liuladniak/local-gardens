import "./Vitrine.scss";
import img1 from "../../assets/img/vase-2.jpeg";
import img2 from "../../assets/img/vase-1.jpeg";

const vitrine = [
  {
    id: 1,
    path: img1,
  },
  {
    id: 2,
    path: img2,
  },
];

const Vitrine = () => {
  return (
    <section className="vitrine">
      <div className="vitrine__desctiption">
        <p className="vitrine__desctiption-text--1">
          crafted. curated. collected.
        </p>
        <p className="vitrine__desctiption-text--2">
          Personal Interior Expressions for Inspired Living - Local Gardens
          offer unique interior decor and gift items for modern dwellers who
          insist on quality and character.
        </p>
      </div>
      <div className="vitrine__image">
        <img
          className="vitrine__image--1"
          src={img1}
          alt="Photo of shelf with products"
        />
        <div className="vitrine__image-slider"></div>
        <img className="vitrine__image--2" src={img2} alt="" />
        <span className="vitrine__selector"></span>
        <span className="vitrine__selector--2"></span>
        <span className="vitrine__selector--3"></span>
      </div>
    </section>
  );
};

export default Vitrine;
