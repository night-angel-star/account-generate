import AppRoutes from "./AppRoutes";
import { RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  return <RouterProvider router={AppRoutes} />;
}

export default App;
