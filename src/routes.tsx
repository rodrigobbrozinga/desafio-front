import Desafio1 from './pages/Desafio1';
import Desafio2 from './pages/Desafio2';
import Desafio3 from './pages/Desafio3';
import Desafio4 from './pages/Desafio4';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Desafio1 />
                </Route>
                <Route path="/desafio1">
                    <Desafio1 />
                </Route>
                <Route path="/desafio2">
                    <Desafio2 />
                </Route>
                <Route path="/desafio3">
                    <Desafio3 />
                </Route>
                <Route path="/desafio4">
                    <Desafio4 />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;