import "../../layout/Header/Header.css";

function Header() {
  return (
    <>
      <header>
        <nav className="flex flex-row">
          <div className="nav-box ">
            <button className="nav-button ">
              <h2 className="nav-text">Khlystov Group</h2>
            </button>
          </div>

          <div className="second-nav-box">
            <h2 className="nav-text">+7 (952) 461-69-31</h2>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
