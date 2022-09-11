import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { loadMain } from "store/main/actions";
import { selectFilms } from "store/main/selectors";

import MainPageShow from "components/MainPageShow";

import routeMain from "./routes";

import "./style.scss";

const MainPage = () => {
   const dispatch = useDispatch();
   const filmsMain = useSelector(selectFilms);

   useEffect(() => {
      dispatch(loadMain());
   }, [dispatch]);

   return (
      <section className="main">
         <h1 className="main-name">MOVIES PORTAL</h1>
         <div className="container main__wrapper">
            {filmsMain.length > 0 ? (
               filmsMain
                  .slice(0, 8)
                  .map((film) => (
                     <MainPageShow props={film["show"]} key={film.show.id} />
                  ))
            ) : (
               <div>Пусто...</div>
            )}
         </div>
      </section>
   );
};

export { routeMain };

export default MainPage;
