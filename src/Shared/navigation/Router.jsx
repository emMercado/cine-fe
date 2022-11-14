import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "../../Home/pages/HomePage";
import LayoutContainer from "../components/LayoutContainer";
import ComponentsRouter from "../components/RouterComponents";

const DashboardLayout = ({ component: Component, props }) => (
  <LayoutContainer>
    <Component {...props} />
  </LayoutContainer>
);

const Home = () => DashboardLayout({ component: HomePage });

const Router = () => {
  /* const home = useCallback(() => {
        //TODO: validaciones si esta logeado
        return Home;
    }, []);
    */

  const signedInRoutes = () => {
    //TODO: Rutas pusheadas permitidas dependiendo de los permisos del usuario
    const routes = [
      "/",
      "/user/manager",
      "/movie/manager",
      "/room/manager",
      "/schedule/manager",
    ];
    const finalRoutes = [...new Set(routes)].map((route) => (
      <Route
        key={route}
        exact
        path={route}
        render={(props) =>
          DashboardLayout({ component: ComponentsRouter(route), props })
        }
      />
    ));
    return finalRoutes;
  };

  return (
    <Switch>
      {signedInRoutes()}
      <Route path="*" render={<Home />}>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Router;
