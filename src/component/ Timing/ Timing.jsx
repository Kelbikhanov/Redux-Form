import React from "react";
import styles from "./Timing.module.css"

const Timing = (props) => {
    return (
        <div className={styles.selectStyle}>
            <label htmlFor="exampleFormControlSelect1" className={styles.sr_only}></label>
            <select className={styles.form_control}>
                <option className={styles.option_p}>Выбирите время</option>
                <option className={styles.option_p}>1 час</option>
                <option className={styles.option_p}>3 часа</option>
                <option className={styles.option_p}>6 часов</option>
                <option className={styles.option_p}>12 часов</option>
                <option className={styles.option_p}>24 часа</option>
                <option className={styles.option_p}>72 часа</option>
                <option className={styles.option_p}>7 дней</option>
                <option className={styles.option_p}>1 месяц</option>
            </select>
        </div>
    )
};

export default Timing;