// main.js
import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router"; // 引入配置好的路由
import { AliveScope } from "react-activation";
import "./styles.css";
import "./config/i18n";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <AliveScope>
    <RouterProvider router={router} />
  </AliveScope>
);
