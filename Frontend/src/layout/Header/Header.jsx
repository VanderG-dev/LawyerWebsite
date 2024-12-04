import "../../layout/Header/Header.css";

function Header() {
  return (
    <header>
      <div className="flex flex-row">
        <nav className="nav-box">
          <ul className="nav-list">
            <li>
              <button className="nav-button" aria-label="Go to Khlystov Group homepage">
                <span className="nav-text">Khlystov Group</span>
              </button>
            </li>
          </ul>
        </nav>

        <div className="second-nav-box">
          <p className="nav-text">+7 (952) 461-69-31</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
