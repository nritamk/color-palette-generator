import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WebPage from "./routes/Webpage.jsx";
import ColorPalette from "./routes/ColorPalette.jsx";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <ColorPalette />,
      },
      {
        path: "webpage",
        element: <WebPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRoutes}></RouterProvider>
    </Provider>
  </StrictMode>
);
