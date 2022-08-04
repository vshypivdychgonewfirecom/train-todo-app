/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import CustomModal from "../../components/CustomModal";
import AddItem from "./AddItem";
import Footer from "./AddItem/Footer";

export default () => {
  const { t } = useTranslation("dashboard");
  const navigate = useNavigate();
  const [addItemModal, setAddItemModal] = useState(false);

  useEffect(() => {
    if (
      !localStorage.getItem("newfire-train-todo-app-token") &&
      !sessionStorage.getItem("newfire-train-todo-app-token")
    ) {
      navigate("../login", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="home-container flex flex-col">
      <CustomModal
        open={addItemModal}
        setOpen={setAddItemModal}
        title={t("add_item.label")}
        content={<AddItem setOpen={setAddItemModal} />}
      />
      <CustomButton onClick={() => setAddItemModal(true)} text="Add Item" />
      <CustomButton
        onClick={() => {
          if (localStorage.getItem("newfire-train-todo-app-token")) {
            localStorage.setItem("newfire-train-todo-app-token", "");
          }

          sessionStorage.setItem("newfire-train-todo-app-token", "");
          navigate("../login", { replace: true });
        }}
        text="Log out"
      />
    </div>
  );
};
