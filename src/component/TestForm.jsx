import React from "react";
import {Field, reduxForm} from "redux-form";
import normalizePhone from "./Phone/normalizePhone";
import {required} from "./utils/validators/validators";
import {
    AutoModel,
    AutoNumber, FirstNameAuto, FirstNameUser,
    Phone
} from "./FormControls/FormsControls";
import styles from "./TestForm.module.css"
import FormData from "./Data/ComponentFormData";
import NumberApp from "./NumberUpp/NumberUpp";
import FirstName from "./FirstName/FirstName";
import Toggle from "./Toggle/Toggle";
import Timing from "./ Timing/ Timing";
import NameCompany from "./NameCompany/NameCompany";


const ApplicationForm = (props) => {

    return (
        <div className={styles.wrap}>
            <div className={styles.form}>
                <form onSubmit={props.handleSubmit}>
                    <li>Дата подачи заявки</li>
                    <FormData/>
                    <li>Номер заявки</li>
                    <NumberApp/>
                    <li>ФИО инициатора заявки</li>
                    <FirstName/>
                    <li>Тип пропуска</li>
                    <Toggle/>
                    <li>Период действия пропуска</li>
                    <Timing/>
                    <li>Название компании</li>
                    <NameCompany/>
                    <li>Номер автомобиля</li>
                    <div className={styles.inputStyle}>
                        <Field placeholder={"X 000 YY 198"} name={"autoNumber"}
                               validate={[required]}
                               component={AutoNumber}/>
                    </div>
                    <li>Марка и модель автомобиля</li>
                    <div className={styles.inputStyle}>
                        <Field placeholder={"Audi A6"} name={"autoModel"}
                               validate={[required]}
                               component={AutoModel}/>
                    </div>
                    <li>ФИО владельца автомобиля</li>
                    <div className={styles.selectStyle}>
                        <Field placeholder="Введите ФИО владельца" name="firstnameauto"
                               validate={[required]}
                               component={FirstNameAuto}>
                        </Field>
                    </div>
                    <li>ФИО водителя автомобиля</li>
                    <div className={styles.selectStyle}>
                        <Field placeholder="Введите ФИО водителя" name="firstnameuser"
                               validate={[required]}
                               component={FirstNameUser}>
                        </Field>
                    </div>
                    <a className={styles.flex}>
                        <li>совпадает с ФИО владельца</li>

                    </a>

                    <li>Контактный номер телефона</li>
                    <div className={styles.inputStyle}>
                        <Field
                            name="phone" type="text" placeholder="+7 (900) 900 90 90"
                            validate={[required]}
                            component={Phone}
                            normalize={normalizePhone}
                        />
                    </div>

                    <div className={styles.btn_div}>

                        <button onClick={Hiden} id="hider" className={styles.btn_send}>Подать заявку</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const Hiden = (props) => {
    if (props.handleSubmit) {
        document.getElementById('hider').hidden = true;
    }
};

const ApplicationReduxForm = reduxForm({form: 'application'})(ApplicationForm);

const Application = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);/*Выводим данные в консоль браузера*/
    };

    return (
        <div>
            <ApplicationReduxForm onSubmit={onSubmit}/>
        </div>

    )
};

export default Application;