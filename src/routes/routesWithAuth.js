import { Route, Switch, useRouteMatch } from "react-router";
import { Edition, Tables } from "../pages";
import { NaviBar } from "../components";

function RoutesWithAuth() {
   const match = useRouteMatch('/edition')
   
   return (
      <>
         <NaviBar isEdition={match}/>
         <Switch>
            <Route path={'/'} component={Tables} exact/>
            <Route path={'/edition'} component={Edition} exact/>
         </Switch>
      </>
   )
}

export default RoutesWithAuth