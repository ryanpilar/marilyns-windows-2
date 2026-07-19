import { Link } from "react-router-dom";

import logoDark from "../../images/logo-dark.webp";

const primaryLinks = [
  { label: "Home", to: "/" },
  { label: "My Story", to: "/aboutme" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer bg-gray footer-light footer-wide">
      <div className="footer-bottom overlay-wraper">
        <div className="overlay-main bg-black" style={{ opacity: 0 }} />
        <div className="container footer-content">
          <div className="row footer-primary-row">
            <div className="col-md-4 footer-brand">
              <Link
                to="/"
                className="footer-brand-link"
                aria-label="Marilyn's Windows home"
              >
                <img
                  src={logoDark}
                  alt="Marilyn's Windows & Interiors"
                  width={140}
                  height={58}
                />
              </Link>
            </div>

            <nav
              className="col-md-8 footer-site-navigation"
              aria-label="Footer navigation"
            >
              <ul>
                {primaryLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="row footer-secondary-row">
            <div className="col-sm-6 footer-copyright">
              &copy; {currentYear} Marilyn&apos;s Windows &amp; Interiors
            </div>

            <nav className="col-sm-6 footer-legal-navigation" aria-label="Legal">
              <ul>
                <li>
                  <Link to="/terms">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
