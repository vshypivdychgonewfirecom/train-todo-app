import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";

export default () => {
  const navigate = useNavigate();

  const addItem = () => {
    console.log("Add item!")
  }

  useEffect(() => {
    if (
      !localStorage.getItem("newfire-train-todo-app-token") &&
      !sessionStorage.getItem("newfire-train-todo-app-token")
    ) {
      navigate("../login", { replace: true });
    }
  }, []);

  return (
    <div className="home-container flex flex-col">
      Hello World
      <CustomButton
        onClick={addItem}
        text="Add Item"
      />
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
}
