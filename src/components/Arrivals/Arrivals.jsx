import "./Arrivals.scss";
import img1 from "../../assets/img/img--1.jpeg";
import img2 from "../../assets/img/img--5.jpeg";
import img3 from "../../assets/img/cup-1.jpeg";
import img4 from "../../assets/img/img--15.jpeg";
import img5 from "../../assets/img/img--18.jpg";
import img6 from "../../assets/img/img--6.jpeg";
import img7 from "../../assets/img/img--19.jpg";
import img8 from "../../assets/img/img--20.jpg";

const arrivals = [
  {
    id: 1,
    path: img1,
    alt: "Photo of a vase",
    title: "Hand Thrown Vase No. 5",
    href: "#",
    price: 60,
  },
  {
    id: 2,
    path: img2,
    alt: "Photo of a vase",
    title: "Hand Thrown Vase No. 5",
    href: "#",
    price: 60,
  },
  {
    id: 3,
    path: img3,
    alt: "Photo of a vase",
    title: "Hand Thrown Vase No. 5",
    href: "#",
    price: 60,
  },
  {
    id: 4,
    path: img4,
    alt: "Photo of a vase",
    title: "Hand Thrown Vase No. 5",
    href: "#",
    price: 60,
  },
  {
    id: 5,
    path: img5,
    alt: "Photo of a vase",
    title: "Hand Thrown Vase No. 5",
    href: "#",
    price: 60,
  },
  {
    id: 6,
    path: img6,
    alt: "Photo of a vase",
    title: "Hand Thrown Vase No. 5",
    href: "#",
    price: 60,
  },
  {
    id: 7,
    path: img7,
    alt: "Photo of a vase",
    title: "Hand Thrown Vase No. 5",
    href: "#",
    price: 60,
  },
  {
    id: 8,
    path: img8,
    alt: "Photo of a vase",
    title: "Hand Thrown Vase No. 5",
    href: "#",
    price: 60,
  },
];

const Arrivals = () => {
  return (
    <section className="arrivals">
      <div className="arrivals__heading">
        <h2 className="arrivals__title">New Arrivals</h2>
      </div>

      <div className="item__container">
        {arrivals.map((item, i) => {
          return (
            <div key={i} className={`item item--${i + 1}`}>
              <img
                className="item__img"
                src={item.path}
                alt="Photo of a vase"
              />
              <a className="item__link" href={item.href}>
                <h4 className="item__heading">{item.title}</h4>
              </a>
              <p className="item__price">${item.price}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Arrivals;
