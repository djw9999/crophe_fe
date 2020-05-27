import React, { useState } from "react";
import $style from "./style.module.scss";

import { Switch, Route } from "react-router-dom";

import { Layout } from './components/Layout';
import { routes } from './route/index';

interface IProps {
    [key:string]: any
  }

export const Data = (props:IProps) => {

  return (
    <div className={$style['dataWrapper']}>
        <Switch>
            <Layout>
                <Route path={routes.riceQzWy.path} component={routes.riceQzWy.component}></Route>
                <Route path={routes.riceRlxWy.path} component={routes.riceRlxWy.component}></Route>
                <Route path={routes.riceData.path} component={routes.riceData.component}></Route>
                <Route exact path={'/dataSearch'} component={routes.riceQzWy.component}></Route>
            </Layout>
        </Switch>
    </div>
  );
};
