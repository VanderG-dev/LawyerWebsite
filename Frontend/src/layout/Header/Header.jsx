import "../../layout/Header/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="flex flex-row mt-3">
        <nav className="nav-box">
          <ul className="nav-list">
            <li>
              <Link to="/">
                <button className="nav-button" aria-label="Go to Khlystov Group homepage">
                  <img src="/logo.jpg" alt="logo" width="48px " className="logo mr-4" />
                  <span className="nav-text">Khlystov Group</span>
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="second-nav-box">
          <img src="/icons/Nav/call.png" alt="call" width="32px" className="phone-number" />
          <p className="nav-text">+7 (952) 461-69-31</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
