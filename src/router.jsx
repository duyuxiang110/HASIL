// router.js
import { createBrowserRouter } from "react-router-dom";
import Example from "./App";
import routes from "./routes";
import KeepAlive from "react-activation";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <KeepAlive id="App">
        <Example />
      </KeepAlive>
    ),
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);

export default router;
