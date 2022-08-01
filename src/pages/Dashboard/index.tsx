import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();

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
      <button
        className="bg-orange-600 text-white w-32 rounded-md mt-10 cursor-pointer hover:bg-orange-400 active:bg-orange-700"
        onClick={() => {
          if (localStorage.getItem("newfire-train-todo-app-token")) {
            localStorage.setItem("newfire-train-todo-app-token", "");
          }

          sessionStorage.setItem("newfire-train-todo-app-token", "");
          navigate("../login", { replace: true });
        }}
      >
        Log out
      </button>
    </div>
  );
}
