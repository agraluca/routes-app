import { Switch, Route, Redirect } from "react-router-dom";

import Home from "pages/Home";
import Admin from "pages/Admin";
import Menu from "components/Menu";

import { PrivateRoute } from "./privateRoute";
import { permissionTypes } from "utils/permissions";

import NotFound from "pages/NotFound";

import * as paths from "./paths";

export default function Routes() {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path={paths.home} component={Home} />
        <PrivateRoute
          exact
          path={paths.admin}
          component={Admin}
          permission={permissionTypes.ADMIN}
        />
        <Route exact path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </>
  );
}
