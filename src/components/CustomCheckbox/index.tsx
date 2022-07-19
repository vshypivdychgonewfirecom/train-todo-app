import { MutableRefObject } from "react";

export default function CustomCheckbox(props: {
  label: string;
  refs: MutableRefObject<HTMLInputElement[]>;
  setValues: Function;
  values: { checked: boolean };
}) {
  return (
    <div className="custom-input-container flex w-full pl-1">
      <input
        className="w-4 accent-amber-600"
        type="checkbox"
        id={`my-input-${props.label}`}
        ref={(e) => {
          if (
            e &&
            props.refs.current.findIndex((element) => element.id === e.id) < 0
          )
            props.refs.current.push(e);
        }}
        onClick={() => {
          props.setValues({ ...props.values, checked: !props.values.checked });
        }}
      />
      <label
        className="text-lg pt-0.5 ml-4 pb-0.5"
        htmlFor={`my-input-${props.label}`}
      >
        {props.label}
      </label>
    </div>
  );
}
