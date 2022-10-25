import "./App.css";
import { routes } from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
