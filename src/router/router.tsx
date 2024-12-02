import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ErrorPage, DoctorsPage, NursesPage } from "../pages";
import App from "../App";

export enum EPages {
  Home = "/",
  Doctors = "doctors",
  Nurses = "nurses",
}

export const routes: RouteObject[] = [
  {
    path: EPages.Home,
    element: <DoctorsPage />,
  },
  {
    path: EPages.Doctors,
    element: <DoctorsPage />,
  },
  {
    path: EPages.Nurses,
    element: <NursesPage />,
  },
];

export const router = createBrowserRouter([
  {
    path: EPages.Home,
    element: <App />,
    errorElement: <ErrorPage />,
    children: routes,
  },
]);
