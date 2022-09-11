import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";

import MainPage, { routeMain as routeMainPage } from "pages/MainPage";
import Contacts, { routeMain as routeContacts } from "pages/Contacts";
import FilmListPage, { routeMain as routeFilmListPage } from "pages/FilmListPage";
import FilmDetail, { routeMain as routeFilmDetail } from "pages/FilmDetail";
import SearchPage, { routeMain as routeSearchPage } from "pages/SearchPage";

import "assets/fonts/fonts.css";

import "./style.scss";

const AppContent = () => {
   return (
      <div className="main__wrapp">
         <Header />
         <main>
            <Switch>
               <Route
                  exact
                  path={routeMainPage()}
                  component={MainPage}
               />
               <Route
                  exact
                  path={routeFilmListPage()}
                  component={FilmListPage}
               />
               <Route
                  exact
                  path={routeContacts()}
                  component={Contacts}
               />
               <Route
                  exact
                  path={routeFilmDetail()}
                  component={FilmDetail}
               />
               <Route
                  exact
                  path={routeSearchPage()}
                  component={SearchPage}
               />
               <Redirect to={routeMainPage()} />
            </Switch>
         </main>
         <Footer />
      </div>
   );
};

export default AppContent;
