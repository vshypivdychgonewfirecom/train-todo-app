import { MutableRefObject, useState } from "react";
import { useTranslation } from "react-i18next";

export default function CustomInput(props: {
  label: string;
  refs: MutableRefObject<HTMLInputElement[]>;
  setValues: Function;
  values: {};
  type?: string;
  className?: string;
  required?: boolean;
}) {
  const { t } = useTranslation("error");
  const [error, setError] = useState(false);

  function changeValue(value: string) {
    props.setValues({
      ...props.values,
      [props.label.toLocaleLowerCase()]: value,
    });
  }

  return (
    <div className="custom-input-container flex flex-col mb-3 last:mb-0 w-full">
      <label
        className={`mb-1 text-sm sm:text-base ${error ? "text-red-500" : ""}`}
        htmlFor={`my-input-${props.label}`}
        data-testid="custom-input-label"
      >
        {props.label}
      </label>
      <input
        className={`border-2 tracking-wider  border-slate-300 rounded-lg p-3 text-sm sm:text-base w-full ${
          props.className
        } ${error ? "border-red-500" : ""}`}
        type={props.type}
        id={`my-input-${props.label}`}
        ref={(e) => {
          if (
            e &&
            props.refs.current.findIndex((element) => element.id === e.id) < 0
          )
            props.refs.current.push(e);
        }}
        onBlur={(e) => {
          if (e.target.value) {
            changeValue(e.target.value);
            setError(false);
            return;
          }

          changeValue('');

          if (props.required) {
            setError(true);
            return;
          }
        }}
        data-testid="custom-input-input"
      />
      {error && (
        <small className="text-red-500 pl-1 mt-1">{t("required")}</small>
      )}
    </div>
  );
}

CustomInput.defaultProps = {
  type: "text",
  classname: "",
  required: false,
};
