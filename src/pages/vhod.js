import styles from "./vhod.module.css";
import React, { useState } from 'react';
const DivstylesActivityPopupCon = () => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://85.175.194.251:50430/api/auth/base-sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });
      
      if (!response.ok) throw new Error("Произошла ошибка при запросе");
  
      const data = await response.json();
  

      fetchUserInfo(data.accessToken);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };
  const fetchUserInfo = async (accessToken) => {
    try {
      const response = await fetch("http://lexxv.ru:50430/api/user/me", {
        headers: {
          "accept": "application/json",
          "authorization": `Bearer ${accessToken}`,
        },
        method: "GET",
      });
  
      if (!response.ok) throw new Error("Ошибка при получении данных пользователя");
  
      const userInfo = await response.json();
      console.log(userInfo);
    } catch (error) {
      console.error("Ошибка при запросе данных пользователя:", error);
    }
  };
    
  return (
    <div className={styles.divstylesActivityPopupCon}>
      <section className={styles.divsignupForm}>
        <div className={styles.divsignupFormInner}>
          <div className={styles.buttonSvgParent}>
            <a href="https://dd13-46-158-109-14.ngrok-free.app/">
              <img
                className={styles.buttonSvg}
                loading="lazy"
                alt=""
                src="/button--svg.svg"
              />
            </a>
            <div className={styles.wrapper}>
              <h3 className={styles.h3}>
                <p className={styles.p}>Войдите или</p>
                <p className={styles.p1}>зарегистрируйтесь</p>
              </h3>
            </div>
            <input
  className={styles.buttonContinue}
  placeholder="Телефон или e-mail"
  type="text"
  value={userCredentials.email}
  onChange={(e) => setUserCredentials({...userCredentials, email: e.target.value})}
/>

<input
  className={styles.buttonContinue}
  placeholder="Пароль"
  type="password"
  value={userCredentials.password}
  onChange={(e) => setUserCredentials({...userCredentials, password: e.target.value})}
/>


            <div className={styles.buttonContinue1}>
            <button className={styles.formButton} onClick={handleSubmit}>
  <div className={styles.div}>Продолжить</div>
</button>

            </div>
            <div className={styles.secondaryActionLinks}>
              <div className={styles.eMail}>Использовать e-mail из</div>
            </div>
          </div>
        </div>
        <div className={styles.divsignupFormSecondaryAct}>
          <div className={styles.link}>
            <div className={styles.mosru}>Mos.ru</div>
          </div>
          <button className={styles.link1}>
            <img className={styles.svgIcon} alt="" src="/svg-1.svg" />
            <div className={styles.div1}>ВКонтакте</div>
          </button>
          <div className={styles.link2}>
            <img
              className={styles.svgIcon1}
              loading="lazy"
              alt=""
              src="/svg-2.svg"
            />
            <div className={styles.div2}>Яндекс</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DivstylesActivityPopupCon;
