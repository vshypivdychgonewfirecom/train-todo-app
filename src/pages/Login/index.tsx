import { useRef, useState, useEffect, MutableRefObject } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CustomInput from "../../components/CustomInput";
import CustomCheckbox from "../../components/CustomCheckbox";
const logo = require("../../resource/images/logo.png");

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("newfire-train-todo-app-token")) {
      navigate("/", { replace: true });
    }
  }, []);

  const { t } = useTranslation("login");
  const inputFormRefs: MutableRefObject<Array<HTMLInputElement>> = useRef([]);
  const [values, setValues] = useState({
    username: "",
    password: "",
    checked: false,
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(values);

    if (values.checked)
      localStorage.setItem("newfire-train-todo-app-token", "test");

    if (values.password && values.username) {
      sessionStorage.setItem("newfire-train-todo-app-token", "test");
      navigate("/");
    }
  }

  useEffect(() => {
    inputFormRefs.current[0].focus();
  }, []);

  return (
    <div className="grid login-container h-screen bg-login-background bg-center bg-cover place-items-center">
      <div className="h-screen w-screen bg-blue-800 absolute opacity-30 z-0" />
      <form className="bg-white w-10/12 p-7 sm:p-10 z-10 flex flex-col rounded-lg shadow-2xl items-center pb-12 sm:w-fit">
        <img src={logo} alt="newfire-logo" className="w-60 mb-7" />
        <h1 className="mb-7 text-xl sm:text-2xl self-start">{t("title")}</h1>
        <CustomInput
          label={t("username")}
          refs={inputFormRefs}
          required
          setValues={setValues}
          values={values}
        />
        <CustomInput
          setValues={setValues}
          values={values}
          required
          label={t("password")}
          refs={inputFormRefs}
          type="password"
          className=""
        />
        <span className="self-start text-sm sm:text-base pl-1 text-amber-500 cursor-pointer hover:text-amber-300">
          {t("forgot_password")}
        </span>
        <hr className="w-full my-8 d-none" />
        <div className="w-full justify-center pl-1 sm:w-fit flex flex-col-reverse self-center sm:self-start sm:flex-row items-center">
          <CustomCheckbox
            label={t("remember_me")}
            refs={inputFormRefs}
            setValues={setValues}
            values={values}
          />
          <button
            className={`w-full sm:w-36 mb-3 sm:mb-0 py-2 px-5 
              bg-amber-500 text-base sm:text-lg font-bold 
              text-white rounded-lg hover:bg-amber-400 disabled:bg-gray-300`}
            onClick={handleSubmit}
            disabled={!values.password || !values.username}
            type="submit"
          >
            {t("button").toLocaleUpperCase()}
          </button>
        </div>
      </form>
    </div>
  );
}
