import styles from "./Waiting.module.css";
import React from "react";

export const WaitingFC = ({input, meta, ...props}) => {
    return (
        <div className={styles.waiting}>
            <input className={styles.input_waiting} {...input} {...props} disabled/>
        </div>
    )
};