export const required = value => {
    if (value) return undefined;
    return "Введите значение";

};

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Длина не более ${maxLength} символов`;
    return undefined;
};
