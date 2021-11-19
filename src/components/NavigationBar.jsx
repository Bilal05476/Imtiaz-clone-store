import "./NavigationBar.css";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
const NavigationBar = () => {
  return (
    <div className="container-fluid p-0">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <a className="navbar-brand" href="#home">
              <img className="logo-img" src={logo} alt="logo" />
            </a>
          </div>
          <div className="col-md-4">
            <form className="form-inline my-lg-0">
              <input
                className="form-control mr-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-dark my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <NavLink to="/" className="">
              Home
            </NavLink>
            <NavLink to="/" className="">
              Shop
            </NavLink>
            <NavLink to="/" className="">
              Contact Us
            </NavLink>
            <NavLink to="/" className="">
              About
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
