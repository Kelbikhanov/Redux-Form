import React from "react";
import styles from "../TestForm.module.css";
import {Field} from "redux-form";
import {required} from "../utils/validators/validators";
import {InputData} from "./FormControlCFD";

const FormData = (props) => {
    return (
        <div className={styles.inputStyle}>
            <Field name="anniversaryDate" type="date"
                   validate={[required]}
                   component={InputData}/>
        </div>
    )
};

export default FormData;