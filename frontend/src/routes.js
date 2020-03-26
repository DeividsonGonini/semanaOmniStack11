import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';



export default function Routes() {
    return (

        <BrowserRouter>
            {/* vai garantir que apenas 1 rota seja chamada por vez */}
            <Switch>
                {/* exact para ser exatamente igual, se nao todos os caminhos terao problemas por começarem com / */}
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />


            </Switch>
        </BrowserRouter>
    )

}