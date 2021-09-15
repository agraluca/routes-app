import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "utils/auth";
import { hasPermission } from "utils/permissions";

import NotAuthorized from "pages/NotAuthorized";

export const PrivateRoute = ({
  component: Component,
  permission,
  ...rest
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) => {
  if (!isLoggedIn()) return <Redirect to="/" />;

  return (
    <Route
      {...rest}
      render={(props) =>
        permission && !hasPermission(permission) ? (
          <NotAuthorized />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
