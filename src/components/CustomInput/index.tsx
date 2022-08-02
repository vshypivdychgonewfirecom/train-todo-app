import {
  DeepRequired,
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

const CustomInput = (props: {
  label: string;
  register: UseFormRegister<FieldValues>;
  placeholder: string;
  errors: FieldErrorsImpl<DeepRequired<FieldValues>>;
  trigger: Function;
  type?: string;
}) => {
  return (
    <div className="custom-input-container flex flex-col mb-3 last:mb-0 w-full">
      <label
        className={`mb-1 text-sm sm:text-base ${
          props.errors[props.label] ? "text-red-500" : ""
        }`}
        htmlFor={`my-input-${props.label}`}
        data-testid="custom-input-label"
      >
        {`${props.label.charAt(0).toLocaleUpperCase()}${props.label.slice(1)}`}
      </label>
      <input
        className={`border-2 tracking-wider outline-0 border-slate-300 rounded-lg p-3 text-sm sm:text-base w-full ${
          props.errors[props.label] ? "border-red-500" : ""
        }`}
        type={props.type}
        placeholder={props.placeholder}
        data-testid="custom-input-input"
        {...props.register(props.label)}
        onBlur={() => {
          props.trigger(props.label);
        }}
      />
      {props.errors[props.label] && (
        <small className="text-red-500 pl-1 mt-1">
          {props.errors[props.label]?.message as any}
        </small>
      )}
    </div>
  );
};

CustomInput.defaultProps = {
  type: "text",
  classname: "",
};

export default CustomInput;
