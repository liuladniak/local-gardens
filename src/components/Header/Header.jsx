import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <a className="nav__link" href="#">
              new
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__link" href="#">
              best sellers
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__link" href="#">
              home goods
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__link" href="#">
              kitchen
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__link" href="#">
              paper & stationary
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__link" href="#">
              lifestyle
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__link" href="#">
              gifts
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__link" href="#">
              diy
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__link" href="#">
              sale
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__link nav__link--italic" href="#">
              the journal
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
