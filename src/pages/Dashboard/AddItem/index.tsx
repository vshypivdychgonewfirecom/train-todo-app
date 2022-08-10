import { FieldValues, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomInput from "../../../components/CustomInput";
import CustomDatePicker from "../../../components/CustomDatePicker";
import CustomSelect from "../../../components/CustomSelect";
import Footer from "./Footer";

/* eslint-disable import/no-anonymous-default-export */
export default (props: { onClose: Function }) => {
  const { t } = useTranslation(["dashboard", "error"]);
  const schema = yup
    .object({
      label: yup
        .string()
        .required(t("required", { ns: "error" }))
        .min(
          4,
          `${t("min", { ns: "error" })} 4 ${t("characters", { ns: "error" })}`
        ),
      description: yup.string(),
      dueDate: yup.date().required(t("required", { ns: "error" })),
      priority: yup.string(),
    })
    .required();
  const {
    register,
    formState: { errors },
    trigger,
    handleSubmit,
    getValues,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const priorities: Array<string> = t("add_item.modal.priority.items", {
    ns: "dashboard",
    returnObjects: true,
  });

  const onSubmit = (values: FieldValues) => {
    props.onClose();
  };

  return (
    <>
      <CustomInput
        errors={errors}
        label="label"
        register={register}
        placeholder="Item name"
        trigger={trigger}
      />
      <div className="flex flex-col">
        <label
          className={`mb-1 text-sm sm:text-base ${
            errors["description"] ? "text-red-500" : ""
          }`}
          htmlFor="my-input-description"
        >
          {t("add_item.modal.description", { ns: "dashboard" })}
        </label>
        <textarea
          className="tracking-wider border-solid border-2 border-slate-300 rounded-lg p-3 text-sm sm:text-base"
          rows={5}
          cols={40}
          {...register("description")}
          onBlur={() => {
            console.log(getValues());
          }}
        />
        {errors["description"] && (
          <small className="text-red-500 pl-1 mt-1">
            {errors["description"]?.message as any}
          </small>
        )}
      </div>
      <div className="w-40">
        <CustomDatePicker
          label={t("add_item.modal.due_date", { ns: "dashboard" })}
          name="dueDate"
          setValue={setValue}
          value={getValues("dueDate")}
          error={errors}
          trigger={trigger}
        />
      </div>
      <CustomSelect
        register={register}
        label="priority"
        options={priorities}
        defaultValue={"Medium"}
      />
      <Footer
        handleConfirm={handleSubmit(onSubmit)}
        handleCancel={props.onClose}
      />
    </>
  );
};
