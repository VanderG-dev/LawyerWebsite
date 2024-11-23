import "./Nav.css";
import NavButton from "../NavButton/NavButton.jsx";

function Nav() {
  return (
    <>
      <div className="content-box-white">
        <div className="nav-flex">
          <NavButton text="Семейные споры" image="family.png"></NavButton>
          <NavButton text="Банковские споры" image="bank.png"></NavButton>
          <NavButton text="Трудовые споры" image="settings.png"></NavButton>
          <NavButton text="Взыскание задолженностей" image="save-money.png"></NavButton>

          <NavButton text="Автоюрист" image="car-insurance.png"></NavButton>
          <NavButton text="Арбитражные дела" image="tie.png"></NavButton>
          <NavButton text="Недвижимость, земельные споры" image="hook.png"></NavButton>
          <NavButton text="Жилищные споры" image="house.png"></NavButton>

          <NavButton text="Военное право" image="helmet.png"></NavButton>
          <NavButton text="Медицинские споры" image="hospital.png"></NavButton>
          <NavButton text="Наследственное право" image="social-justice.png"></NavButton>
          <NavButton text="Защита прав потребителей" image="user.png"></NavButton>
        </div>
      </div>
    </>
  );
}

export default Nav;
