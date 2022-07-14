import { Switch } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import RoutesWithAuth from './routesWithAuth'
import RoutesWithoutAuth from './routesWithoutAuth'


function Routes(){
   const {isAuthenticated} = useAuth()

   return (
      <Switch>
         {isAuthenticated ? <RoutesWithAuth/> : <RoutesWithoutAuth/>}
      </Switch>
   )
}

export default Routes