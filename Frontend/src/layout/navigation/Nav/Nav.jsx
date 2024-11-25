import "./Nav.css";
import NavButton from "../NavButton/NavButton";

function Nav({ setWindow }) {
  return (
    <div className="content-box-white">
      <div className="nav-flex">
        <NavButton setWindow={setWindow} text="Семейные споры" image="family.png" />
        <NavButton setWindow={setWindow} text="Банковские споры" image="bank.png" />
        <NavButton setWindow={setWindow} text="Трудовые споры" image="settings.png" />
        <NavButton setWindow={setWindow} text="Взыскание задолженностей" image="save-money.png" />

        <NavButton setWindow={setWindow} text="Автоюрист" image="car-insurance.png" />
        <NavButton setWindow={setWindow} text="Арбитражные дела" image="tie.png" />
        <NavButton setWindow={setWindow} text="Недвижимость" image="hook.png" />
        <NavButton setWindow={setWindow} text="Жилищные споры" image="house.png" />

        <NavButton setWindow={setWindow} text="Военное право" image="helmet.png" />
        <NavButton setWindow={setWindow} text="Медицинские споры" image="hospital.png" />
        <NavButton setWindow={setWindow} text="Наследственное право" image="social-justice.png" />
        <NavButton setWindow={setWindow} text="Защита прав потребителей" image="user.png" />
      </div>
    </div>
  );
}

export default Nav;
