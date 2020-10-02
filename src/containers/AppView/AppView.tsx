import React, {FC} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {ItemDetailsViewWrapper} from '../ItemDetailsView/ItemDetailsViewWrapper';
import {FooterView} from '../FooterView/FooterView';
import {HeaderView} from '../HeaderView/HeaderView';
import {ItemsView} from '../ItemsView/ItemsView';

export const AppView: FC = () =>
  <div className="container">
    <HeaderView/>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ItemsView/>
        </Route>
        <Route path="/:id">
          <ItemDetailsViewWrapper />
        </Route>
      </Switch>
    </BrowserRouter>
    <FooterView/>
  </div>;