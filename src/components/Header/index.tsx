import React from "react";

import { NavLink } from "react-router-dom";

import { routeMain as routeMainPage } from "pages/MainPage";
import { routeMain as routeContacts } from "pages/Contacts";
import { routeMain as routeFilmListPage } from "pages/FilmListPage";
import { routeMain as routeSearchPage } from "pages/SearchPage";

import "./style.scss";

const Header = () => {
   return (
      <header className="header">
         <div className="header__title">
            <NavLink className="header__title-link" to={"/main"}>
               MoviesPortal
            </NavLink>
         </div>

         <nav>
            <NavLink to={routeMainPage()} activeClassName="header__active-link">
               Главная
            </NavLink>
            <NavLink to={routeFilmListPage()} activeClassName="header__active-link">
               Категории
            </NavLink>
            <NavLink to={routeSearchPage()} activeClassName="header__active-link">
               Поиск
            </NavLink>
            <NavLink to={routeContacts()} activeClassName="header__active-link">
               Обо мне
            </NavLink>
         </nav>
      </header>
   );
};

export default Header;
