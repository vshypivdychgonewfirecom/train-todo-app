import React, { MutableRefObject, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const CustomInput = (props: {
  label: string;
  refs: MutableRefObject<HTMLInputElement[]>;
  placeholder: string;
  type?: string;
  required?: boolean;
  validation?: Function;
}) => {
  const { t } = useTranslation("error");
  const [error, setError] = useState({
    active: false,
    message: "",
  });
  const [button, setButton] = useState<HTMLButtonElement>();

  const setErrorAndChecked = (
    e: React.FocusEvent<HTMLInputElement, Element>,
    bool: boolean,
    message: string
  ) => {
    setError({ active: bool, message: message });
    e.target.dataset.valid = !bool ? "valid" : "";
  };

  const setButtonDisabled = (disabled: boolean) => {
    if (button) button.disabled = disabled;
  };

  useEffect(
    () =>
      setButton(
        document.getElementById("login-submit-button") as HTMLButtonElement
      ),
    []
  );

  return (
    <div className="custom-input-container flex flex-col mb-3 last:mb-0 w-full">
      <label
        className={`mb-1 text-sm sm:text-base ${
          error.active ? "text-red-500" : ""
        }`}
        htmlFor={`my-input-${props.label}`}
        data-testid="custom-input-label"
      >
        {props.label}
      </label>
      <input
        className={`border-2 tracking-wider  border-slate-300 rounded-lg p-3 text-sm sm:text-base w-full ${
          error.active ? "border-red-500" : ""
        }`}
        type={props.type}
        placeholder={props.placeholder}
        id={`my-input-${props.label}`}
        ref={(e) => {
          if (
            e &&
            props.refs.current.findIndex((element) => element.id === e.id) < 0
          )
            props.refs.current.push(e);
        }}
        data-valid=""
        onBlur={(e) => {
          if (props.required && !e.target.value) {
            setErrorAndChecked(e, true, t("required"));
            setButtonDisabled(true);
            return;
          }

          if (props.validation && !props.validation(e.target.value)) {
            setErrorAndChecked(e, true, t("email"));
            setButtonDisabled(true);
            return;
          }

          setErrorAndChecked(e, false, "");

          if (
            props.refs.current.findIndex(
              (element) => !element.value || !element.dataset.valid
            ) < 0
          ) {
            setButtonDisabled(false);
          }
        }}
        data-testid="custom-input-input"
      />
      {error.active && (
        <small className="text-red-500 pl-1 mt-1">{error.message}</small>
      )}
    </div>
  );
};

CustomInput.defaultProps = {
  type: "text",
  classname: "",
  required: false,
  validation: () => true,
};

export default CustomInput;
