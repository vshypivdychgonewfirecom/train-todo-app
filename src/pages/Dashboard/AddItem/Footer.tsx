/* eslint-disable import/no-anonymous-default-export */
import { useTranslation } from "react-i18next";
import CustomButton from "../../../components/CustomButton";

export default (props: { handleCancel: Function, handleConfirm: Function }) => {
  const { t } = useTranslation("dashboard");

  return (
    <footer className="flex items-center p-6 pl-0 space-x-2 rounded-b border-t border-gray-200 border-gray-600">
      <CustomButton
        onClick={() => props.handleConfirm()}
        text={t('add_item.modal.buttons.create')}
        className="bg-blue-700 hover:bg-blue-800"
      />
      <CustomButton
        onClick={() => props.handleCancel(false)}
        text={t('add_item.modal.buttons.cancel')}
        className="bg-red-700 hover:bg-red-800"
      />
    </footer>
  );
};
