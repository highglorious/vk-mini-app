import * as yup from "yup";

export interface FormInput {
  name: string;
}

export const inputName = "name";

export const nameRegExp = /^[A-zА-я-]+$/;

export const schema = yup.object({
  name: yup
    .string()
    .required("Обязательное поле для заполнения")
    .matches(nameRegExp, "Используйте только буквы"),
});
