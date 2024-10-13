import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__cols">
        <div className="footer__col">
          <h3 className="footer__heading">About</h3>
        </div>
        <div className="footer__col">
          <h3 className="footer__heading">Explore</h3>

          <ul className="footer__list">
            <li className="footer__list-item">Home goods</li>
            <li className="footer__list-item">Art prints</li>
            <li className="footer__list-item">Favourites</li>
            <li className="footer__list-item">On Sale</li>
          </ul>
        </div>
        <div className="footer__col">
          <h3 className="footer__heading">Connect</h3>

          <ul className="footer__list">
            <li className="footer__list-item">Instagram</li>
            <li className="footer__list-item">Youtube</li>
            <li className="footer__list-item">Facebook</li>
            <li className="footer__list-item">Contact</li>
          </ul>
        </div>
        <div className="footer__col">
          <h3 className="footer__heading">Business</h3>

          <ul className="footer__list">
            <li className="footer__list-item">Careers</li>
            <li className="footer__list-item">About</li>
            <li className="footer__list-item">FAQs</li>
            <li className="footer__list-item">Terms and conditions</li>
          </ul>
        </div>
      </div>
      <div className="footer__copy">
        <span>@ Local Gardens</span>
        <span>Powered by LLad Studios</span>
      </div>
    </div>
  );
};

export default Footer;
