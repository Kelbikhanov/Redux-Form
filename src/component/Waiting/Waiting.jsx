import styles from "./Waiting.module.css";
import {Field} from "redux-form";
import {required} from "../utils/validators/validators";
import React from "react";
import {WaitingFC} from "./WaitingFC";

const Waiting = (props) => {
    return (
        <div className={styles.waiting_p}>
            <Field placeholder="В рассмотрении" name={"waiting"}
                   validate={required}
                   component={WaitingFC}/>
        </div>
    )
};

export default Waiting;