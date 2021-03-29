import {Switch, Route} from 'react-router-dom';
import Main from "../pages/Main";
import Admin from "../pages/Admin";
import Quiz from "./Admin/Quiz";
import Page404 from './Page404';

const Routing = () => {
    return(
        <Switch>
            <Route path={"/admin/quiz/:id"} component={Quiz}/>
            <Route path={"/admin"} component={Admin}/>
            <Route exact path={"/"} component={Main}/>
            <Route path="*" component={Page404}/>
        </Switch>
    );
}

export default Routing;
