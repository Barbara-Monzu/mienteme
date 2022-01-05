import { Switch, Route } from 'react-router-dom';
import Home from "../index/Home";
import SignupPage from '../signUp/SignupPage';
import LoginPage from '../login/LoginPage';


const NoLoggedRoutes = ({ storeUser, loggedUser, fetchUser }) => {

    return (
    
            <Switch>
               <Route path="/" exact render={() => <Home />} />
                <Route path="/signup" render={(props) => <SignupPage />} />
                <Route path="/login" render={(props) => <LoginPage/>} />
            </Switch>

      
    )

}

export default NoLoggedRoutes