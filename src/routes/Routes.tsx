import { FC } from 'react';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
  } from "react-router-dom";
import * as routes from './paths';
import FormQuestions from '../pages/FormQuestions';


const Routes: FC = () => {
    
    return (
        <Router>
            <Switch>
                <Route path={routes.USER}  element={<FormQuestions/>} />   
            </Switch>                          
            
        </Router>
    )


}; export default Routes;