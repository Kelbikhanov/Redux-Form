import React from "react";
import styles from "../TestForm.module.css";
import {Field} from "redux-form";
import {required} from "../utils/validators/validators";
import {Input} from "./FormControlNA";


const NumberApp = (props) => {
    return (
        <div className={styles.inputStyle}>
            <Field placeholder={props.numder} name="number" /*Сюда придет номер заявки при логинизации*/
                   validate={[required]}
                   component={Input}/>
        </div>
    )
};

export default NumberApp;