import React from "react";
import styles from "../styles/FormsControl.module.css"


export const FirstNameAuto = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <input className={styles.input} {...input} {...props} />
        </div>
    )
};

export const FirstNameUser = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <input className={styles.input} {...input} {...props} />
        </div>
    )
};







export const AutoNumber = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <input className={styles.input} {...input} {...props} />
        </div>
    )
};

export const AutoModel = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <input className={styles.input} {...input} {...props} />
        </div>
    )
};

export const Phone = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <input className={styles.input} {...input} {...props} />
        </div>
    )
};



export const Checkbox = (props) => {
    return (
        <input className={styles.checkbox} type={"checkbox"} />
    )
};