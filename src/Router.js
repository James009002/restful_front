import { Route, Switch, hashHistory } from "react-router"
import { ROUTES } from "./constant/Routes";
import CreateMember from "./page/createMember";
import Home from "./page/home";
<Switch>
    <Router history={hashHistory}>
        <Route path={ROUTES.ROOT} exact>
        <Redirect to={ROUTES.ROOT} />
        </Route>
        <Route path={ROUTES.MEMBER} exact>
            <CreateMember/>
        </Route>
        <Route path={ROUTES.ADVERTISE} exact>
            <Home />
        </Route>
    </Router>
</Switch>

export default router