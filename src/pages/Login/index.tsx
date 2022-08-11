/* eslint-disable import/no-anonymous-default-export */
import { useRef, useEffect, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomInput from "../../components/CustomInput";
import CustomCheckbox from "../../components/CustomCheckbox";
import CustomButton from "../../components/CustomButton";
import { emailValidation } from "../../utils/validations";

const logo = require("../../resource/images/logo.png");

export default () => {
  const navigate = useNavigate();
  const { t } = useTranslation(["login", "error"]);
  const schema = yup
    .object({
      email: yup
        .string()
        .required(t("required", { ns: "error" }))
        .matches(emailValidation, t("email", { ns: "error" })),
      password: yup
        .string()
        .required(t("required", { ns: "error" }))
        .min(6, t("password", { ns: "error" })),
    })
    .required();
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const checkboxRef: any = useRef(null);
  const formFields = [
    {
      label: "email",
      placeholder: "exemple@new.com",
    },
    {
      label: "password",
      placeholder: "password",
      type: "password",
    },
  ];
  const [disabled, setDisabled] = useState(true);
  const requiredFields = useMemo(() => {
    const fileds: object = Object.values(schema)[12];
    return Object.entries(fileds).map((element) => {
      if (element[1].tests[0].OPTIONS.name === "required") {
        return element[0];
      }
    });
  }, []);

  const onSubmit = (values: any) => {
    if (!Object.values(errors).findIndex((element) => element)) return;
    if (checkboxRef.checked)
      localStorage.setItem("newfire-train-todo-app-token", "test");

    sessionStorage.setItem("newfire-train-todo-app-token", "test");
    navigate("/dashboard");
  };

  useEffect(() => {
    if (localStorage.getItem("newfire-train-todo-app-token")) {
      navigate("/dashboard", { replace: true });
    }
  }, []);

  if (
    disabled &&
    Object.values(getValues()).length &&
    Object.entries(getValues()).findIndex((element) => {
      if (requiredFields.includes(element[0])) return !element[1];
    }) === -1 &&
    Object.values(errors).length === 0
  ) {
    setDisabled(false);
  }

  return (
    <div className="grid login-container h-screen bg-login-background bg-center bg-cover place-items-center">
      <div className="h-screen w-screen bg-blue-800 absolute opacity-30 z-0" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit);
        }}
        className="bg-white w-10/12 p-7 sm:p-10 z-10 flex flex-col rounded-lg shadow-2xl items-center pb-12 sm:w-fit"
      >
        <img src={logo} alt="newfire-logo" className="w-60 mb-7" />
        <h1 className="mb-7 text-xl sm:text-2xl self-start">
          {t("title", { ns: "login" })}
        </h1>
        {formFields.map((element) => (
          <CustomInput
            key={`login-form-${element.label}`}
            label={element.label}
            register={register}
            placeholder={element.placeholder}
            type={element.type}
            errors={errors}
            trigger={trigger}
          />
        ))}
        <span className="self-start text-sm sm:text-base pl-1 text-amber-500 cursor-pointer hover:text-amber-300">
          {t("forgot_password", { ns: "login" })}
        </span>
        <hr className="w-full my-8 d-none" />
        <div className="w-full justify-center pl-1 sm:w-fit flex flex-col-reverse self-center sm:self-start sm:flex-row items-center">
          <CustomCheckbox
            label={t("remember_me", { ns: "login" })}
            refs={checkboxRef}
          />
          <CustomButton
            text={t("button", { ns: "login" }).toLocaleUpperCase()}
            id="login-submit-button"
            disabled={disabled}
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </form>
    </div>
  );
};
