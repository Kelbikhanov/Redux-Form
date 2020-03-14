import React from "react";
import styles from "./Cheackbox.module.css";

export const Input1 = (props) => {
    return (
        <div className={styles.div_input1}>
            <input className={styles.input1} type="checkbox"/>
            <label className={styles.label_input1}></label>
        </div>


    )
};


export const Input2 = (props) => {
    return (
        <div className={styles.div_input2}>
            <input className={styles.input2} type="checkbox"/>
            <label className={styles.label_input2}></label>
        </div>
    )
};

const FIO = () => {}


