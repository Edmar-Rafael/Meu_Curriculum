import { Route, Switch } from "react-router";
import { Home } from "../pages";

function RoutesWithoutAuth() {
    
   return (
      <Switch>
         <Route path={'/'} component={Home}/>
      </Switch>
   )
}

export default RoutesWithoutAuth