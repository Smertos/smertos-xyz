import provideAsync from '@loadable/component';
import { loadableLanding } from 'landing/components/landing';
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

export class Router extends Component {

    render(): JSX.Element {
        return (
            <HashRouter>
                <Route path="/" exact component={provideAsync(loadableLanding)} />
            </HashRouter>
        );
    }

}
 
