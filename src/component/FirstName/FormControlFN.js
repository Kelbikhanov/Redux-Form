import styles from "../styles/FormsControl.module.css";
import React from "react";

export const SelectUserName = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <input className={styles.input} {...input} {...props} />
        </div>
    )
};