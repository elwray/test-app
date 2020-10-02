import React, {FC} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {FooterView} from '../FooterView/FooterView';
import {HeaderView} from '../HeaderView/HeaderView';
import {ItemsView} from '../ItemsView/ItemsView';
import {ItemDetailsView} from '../ItemDetailsView/ItemDetailsView';

export const AppView: FC = () =>
  <div className="container">
    <HeaderView/>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ItemsView/>
        </Route>
        <Route path="/:id">
          <ItemDetailsView/>
        </Route>
      </Switch>
    </BrowserRouter>
    <FooterView/>
  </div>;