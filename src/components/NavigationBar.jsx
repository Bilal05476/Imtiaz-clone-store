import "./NavigationBar.css";
import logo from "../img/logo.png";
const NavigationBar = () => {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="#home">
          <img className="logo-img" src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
