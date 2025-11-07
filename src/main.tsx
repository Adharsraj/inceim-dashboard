import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes.tsx";

createRoot(document.getElementById("root")!).render(
  <div className="font-roboto antialiased">
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </div>
);
