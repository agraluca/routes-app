import { Switch, Route } from "react-router-dom";

import Home from "pages/Home";
import Admin from "pages/Admin";
import Menu from "components/Menu";
import { PrivateRoute } from "./privateRoute";

import * as paths from "./paths";

import { permissionTypes } from "utils/permissions";

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
        {/* <Route render={() => <h1>404</h1>} /> */}
      </Switch>
    </>
  );
}
