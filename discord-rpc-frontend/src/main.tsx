import Configuration from "@pages/Configuration";
import Home from "@pages/Home";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Configuration />} path="configuration" />
    </Routes>
  </BrowserRouter>,
);
