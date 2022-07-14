import { Route, Switch } from "react-router";
import { Edition, Tables } from "../pages";
import { NaviBar } from "../components";

function RoutesWithAuth() {
   
   return (
      <>
         <NaviBar/>
         <Switch>
            <Route path={'/'} component={Tables} exact/>
            <Route path={'/edition'} component={Edition} />
         </Switch>
      </>
   )
}

export default RoutesWithAuth