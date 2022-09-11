import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { loadFilm } from "store/category/actions";
import { selectDetails } from "store/category/selectors";

import FilmListShow from "components/FilmListShow";

import routeMain from "./routes";

import "./style.scss";

const FilmListPage = () => {
   const dispatch = useDispatch();
   const arrayListFilms = useSelector(selectDetails);

   useEffect(() => {
      dispatch(loadFilm());
   }, [dispatch]);

   return (
      <section className="container category">
         <h2 className="category__name">
            Выбранная категория: <span>Animals</span>
         </h2>
         <div className="category__wrapp"> 
            {arrayListFilms.length > 0 ? (
               arrayListFilms
                  .slice(0, 40)
                  .map((detail) => (
                     <FilmListShow list={detail} key={detail.id} />
                  ))
            ) : (
               <div>Пусто...</div>
            )}
         </div>
      </section>
   );
};

export { routeMain };
export default FilmListPage;
