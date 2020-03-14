import React from "react";
import styles from "./Toggle.module.css";
import {Field} from "redux-form";
import {ToggleFC} from "./FormControlToggle";

const Toggle = (props) => {
    return (
        <div className={styles.center}>
            <Field name="employed" id="employed" type="checkbox"
                   component={ToggleFC} />
        </div>
    )
};



export default Toggle;