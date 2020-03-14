import React from "react";
import styles from "../TestForm.module.css";
import {Field} from "redux-form";
import {required} from "../utils/validators/validators";
import {SelectUserName} from "./FormControlFN";

const FirstName = (props) => {
    return (
        <div className={styles.selectStyle}>
            <Field placeholder={props.login} name="userName"  /*Сюда должен придти username с сервака при логинизации*/
                   validate={[required]}
                   component={SelectUserName}>
            </Field>
        </div>
    )
};

export default FirstName;

