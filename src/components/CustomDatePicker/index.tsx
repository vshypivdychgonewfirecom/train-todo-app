/* eslint-disable import/no-anonymous-default-export */
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import DateFnsAdapter from "@date-io/date-fns";
import { useState } from "react";
import { DeepRequired, FieldErrorsImpl, FieldValues } from "react-hook-form";

export default (props: {
  label: string;
  value: Date | null;
  setValue: Function;
  trigger?: Function;
  error?: FieldErrorsImpl<DeepRequired<FieldValues>>;
}) => {
  const [date, setDate] = useState(null);

  return (
    <LocalizationProvider dateAdapter={DateFnsAdapter}>
      <DatePicker
        label={props.label}
        value={date}
        onChange={(newDate) => {
          setDate(newDate);
          props.setValue(props.label, newDate);
          if (props.trigger) props.trigger(props.label);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            error={props.error && !!props.error[props.label]}
          />
        )}
      />
      {props.error && props.error[props.label] && (
        <small className="text-red-500 pl-1 mt-1">
          {props.error[props.label]?.message as any}
        </small>
      )}
    </LocalizationProvider>
  );
};
