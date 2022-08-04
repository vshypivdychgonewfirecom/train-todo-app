/* eslint-disable import/no-anonymous-default-export */
import { FieldValues, UseFormRegister } from "react-hook-form";

export default (props: {
  register: UseFormRegister<FieldValues>;
  options: Array<string>;
  label: string;
  defaultValue?: string;
}) => {
  return (
    <div className="flex flex-col">
      <label
        className="mb-1 text-sm sm:text-base"
        htmlFor={`custom-select-${props.label}`}
      >
        {`${props.label.charAt(0).toLocaleUpperCase()}${props.label.slice(1)}`}
      </label>
      <select
        {...props.register(props.label)}
        defaultValue={props.defaultValue}
        className="w-28 p-2 rounded-lg cursor-pointer border-solid border-2 border-slate-300 mt-2"
      >
        {props.options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};
