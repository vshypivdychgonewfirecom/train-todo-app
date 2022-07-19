import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !localStorage.getItem("newfire-train-todo-app-token") &&
      !sessionStorage.getItem("newfire-train-todo-app-token")
    ) {
      navigate("../login", { replace: true });
    }
  }, []);

  return <div className="home-container">Hello World</div>;
}
