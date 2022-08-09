/* eslint-disable import/no-anonymous-default-export */
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import DateFnsAdapter from "@date-io/date-fns";
import { SetStateAction, useState } from "react";
import { DeepRequired, FieldErrorsImpl, FieldValues } from "react-hook-form";
import { ReactI18NextChild } from "react-i18next";

export default (props: {
  label: string;
  value: Date | null;
  setValue: Function;
  trigger?: Function;
  error?: FieldErrorsImpl<DeepRequired<FieldValues>>;
}) => {
  const [date, setDate] = useState(null);

  const changeHandler = (newDate: SetStateAction<null>) => {
    setDate(newDate);
    props.setValue(props.label, newDate);
    if (props.trigger) props.trigger(props.label);
  };

  return (
    <LocalizationProvider dateAdapter={DateFnsAdapter}>
      <DatePicker
        label={props.label}
        value={date}
        onChange={changeHandler}
        renderInput={(params) => (
          <TextField
            {...params}
            error={props.error && !!props.error[props.label]}
          />
        )}
      />
      {props.error && (
        <small className="text-red-500 pl-1 mt-1">
          {props.error[props.label]?.message as ReactI18NextChild | Iterable<ReactI18NextChild>}
        </small>
      )}
    </LocalizationProvider>
  );
};
