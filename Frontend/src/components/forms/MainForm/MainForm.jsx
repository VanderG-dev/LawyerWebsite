import { useState, useEffect } from "react";
const API_URL = import.meta.env.VITE_API_URL;

import styles from "./MainForm.module.css";
import MainButton from "../../elements/MainButton/MainButton";
import SectionImage from "../../../components/elements/SectionImage/SectionImage";

function MainForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    problem: "",
    consultationType: "DEFAULT",
  });
  // const TOKEN = process.env.REACT_APP_TOKEN;
  //const CHAT_ID = process.env.REACT_APP_CHAT_ID;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_URL}api/telegram`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Pass the form data to the backend
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Message sent successfully:", data.data);
          alert("Your message has been sent!");
        } else {
          console.error("Error sending message:", data.error);
          alert("Failed to send message.");
        }
      })
      .catch((error) => {
        console.error("Request error:", error);
        alert("An error occurred. Please try again.");
      });
  };
  return (
    <>
      <div className={styles.box}>
        <SectionImage image="Form"></SectionImage>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.main_text}>Получить бесплатную консультацию</h1>
          <h2 className={styles.second_text}>
            Заполните необходимые поля, опишите вашу проблему и выберите форму бесплатной
            юридической консультации.
          </h2>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Ваше имя"
            className={styles.form_input}
          />
          <input
            type="text"
            name="number"
            onChange={handleChange}
            value={formData.number}
            placeholder="Номер телефона"
            className={styles.form_input}
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Электронная почта"
            className={styles.form_input}
          />
          <input
            type="text"
            name="problem"
            onChange={handleChange}
            value={formData.problem}
            placeholder="Описание вашей проблемы"
            className={styles.form_input}
          />
          {/* <h2 className={styles.second_text}>Выберите форму получения юридической консультации:</h2> */}

          <select
            className={styles.select}
            value={formData.consultationType}
            name="consultationType" // Add name attribute for the select
            onChange={handleChange}
          >
            <option value="DEFAULT" disabled>
              форма консультации
            </option>
            <option value="номер телефона"> Устно по номеру телефона</option>
            <option value="почта"> Письменно на электронную почту</option>
            <option value="Онлайн консультация"> Онлайн консультация</option>
            <option value="Мессенджер"> Письменно через месседжер</option>
          </select>

          <MainButton></MainButton>
        </form>
      </div>
    </>
  );
}

export default MainForm;
