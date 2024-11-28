import { useState, useEffect } from "react";

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

  const TOKEN = process.env.REACT_APP_TOKEN;
  const CHAT_ID = process.env.REACT_APP_CHAT_ID;
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.name || !formData.email || !formData.number || !formData.problem) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    // Construct the message with proper HTML formatting
    let message = `<b>Заявка с сайта!</b>\n`;
    message += `<b>Имя:</b> ${formData.name}\n`;
    message += `<b>Почта:</b> ${formData.email}\n`;
    message += `<b>Номер телефона:</b> ${formData.number}\n`;
    message += `<b>Проблема:</b> ${formData.problem}\n`;
    message += `<b>Форма консультации:</b> ${formData.consultationType}`;

    // Send message to Telegram
    fetch(URI_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID, // Required: Chat ID of the target chat
        text: message, // Required: Text of the message
        parse_mode: "HTML", // Optional: Enables HTML formatting
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Message sent successfully:", data);
        alert("Сообщение успешно отправлено!");
        setFormData({
          name: "",
          email: "",
          number: "",
          problem: "",
          consultationType: "DEFAULT",
        }); // Reset form
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Произошла ошибка при отправке сообщения.");
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
