import { MutableRefObject } from "react";

export default function CustomInput(props: {
  label: string;
  refs: MutableRefObject<HTMLInputElement[]>;
  type?: string;
  className?: string;
}) {
  return (
    <div className="custom-input-container flex flex-col mb-3 last:mb-0 w-full">
      <label
        className="mb-1 text-sm sm:text-base}"
        htmlFor={`my-input-${props.label}`}
        data-testid="custom-input-label"
      >
        {props.label}
      </label>
      <input
        className={`border-2 tracking-wider border-slate-300 rounded-lg p-3 text-sm sm:text-base w-full ${props.className}`}
        type={props.type}
        id={`my-input-${props.label}`}
        ref={(e) => {
          if (e) props.refs.current.push(e);
        }}
        data-testid="custom-input-input"
      />
    </div>
  );
}

CustomInput.defaultProps = {
  type: "text",
  classname: "",
};
