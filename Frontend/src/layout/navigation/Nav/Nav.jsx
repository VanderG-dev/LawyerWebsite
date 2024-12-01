import "./Nav.css";
import NavButton from "../NavButton/NavButton";

function Nav() {
  return (
    <div className="content-box-white">
      <div className="nav-flex">
        <NavButton text="Семейные споры" image="family.png" />
        <NavButton text="Банковские споры" image="bank.png" />
        <NavButton text="Трудовые споры" image="settings.png" />
        <NavButton text="Взыскание задолженностей" image="save-money.png" />

        <NavButton text="Автоюрист" image="car-insurance.png" />
        <NavButton text="Арбитражные дела" image="tie.png" />
        <NavButton text="Недвижимость" image="hook.png" />
        <NavButton text="Жилищные споры" image="house.png" />

        <NavButton text="Военное право" image="helmet.png" />
        <NavButton text="Медицинские споры" image="hospital.png" />
        <NavButton text="Наследственное право" image="social-justice.png" />
        <NavButton text="Защита прав потребителей" image="user.png" />
      </div>
    </div>
  );
}

export default Nav;
