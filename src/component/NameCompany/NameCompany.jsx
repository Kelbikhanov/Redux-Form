import React from "react";
import styles from "../TestForm.module.css";
import {Field} from "redux-form";
import {required} from "../utils/validators/validators";
import {NameCompanyNC} from "./FormControlNC";

const NameCompany = (props) => {
    return (
        <div className={styles.inputStyle}>
            <Field placeholder={"ООО “Бизнес Вектор”"} name={"nameCompany"}
                   validate={required}
                   component={NameCompanyNC}/>
        </div>
    )
};

export default NameCompany;