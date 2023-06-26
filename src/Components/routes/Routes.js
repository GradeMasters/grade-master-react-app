/* eslint-disable react/jsx-fragments */
import React from "react";
import {
  Routes as Switch,
  Navigate as Redirect,
  Route,
  // useLocation,
} from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import classnames from "classnames"; ///// package used to have multiple classnames on something
import Navbar from "../Navbar";
import LogIn from "../LogIn";
import Home from "../Home";
import { Routes as RoutesEnum } from "../utils/constants";
// import { Routes as RoutesEnum, appClass } from "../components/utils/constants"; // used to access anything css in the top level, would be a div that wraps the routes in app.js
// import NotFound from "../not-found/NotFound"; // this page does not exist yet for us, but will need later
// import { getTabId, useHelmetContext } from "../components/utils";

export function getRouteList() {
  const routes = [
    { path: RoutesEnum.LOGIN, main: <LogIn /> },
    { path: RoutesEnum.HOME, main: <Home /> },

    // { path: RoutesEnum.NOT_FOUND, main: <NotFound /> },
  ];
  return routes;
}

// this makes the routes, loops through the routes list as an array and makes a special route for the routes listed, requires a key to keep chrome happy
export const makeRoutes = ({ component = null, routeList }) =>
  routeList.map(({ exact = true, path, main }) => (
    <Route
      key={path}
      path={path}
      exact={exact !== false}
      element={component || main}
    />
  ));

const baseClass = "body";

export default function Routes() {
  const routeList = getRouteList();
  // const { t } = useTranslation("en"); // use translation file for english

  // const location = useLocation(); // from react router dom, might need this for location

  return (
    <>
      <Navbar />
      <div>
        <Switch>
          {makeRoutes({ routeList })}
          <Route path="/" element={<Redirect to="/home" exact />} />
          {/* <Route path="*" element={<Redirect to="/not-found" />} /> */}
        </Switch>
      </div>
    </>
  );
}
