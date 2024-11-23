import "../../layout/Header/Header.css";

function Header() {
  return (
    <>
      <header>
        <nav className="flex flex-row">
          <div className="nav-box ">
            <button className="nav-button ">
              <h1 className="nav-text">(Название сайта и лого)</h1>
            </button>
          </div>

          <div className="second-nav-box">
            <button className="nav-button favorite-btn"></button>

            <h1 className="nav-text">+7 (952) 461-69-31</h1>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
