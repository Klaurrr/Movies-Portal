import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { loadSearch } from "store/search/actions";
import { selectFilms } from "store/search/selectors";

import MainPageShow from "components/MainPageShow";

import routeMain from "./routes";

import './style.scss';


const SearchPage = () => {
   const dispatch = useDispatch();
   const filmsArray = useSelector(selectFilms);

   const [value, setValue] = useState("");

   const functionOnSubmit = (e: any) => {
      e.preventDefault();
      if (value) {
         dispatch(loadSearch(value));
         setValue("");
      }
   };

   return (
      <div className="container">
         <div className="search">
            <form className="search__wrapper" onSubmit={(e) => functionOnSubmit(e)}>
               <input
                  type="text"
                  className="search__input"
                  placeholder="Пиши тут"
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
               />
               <button 
               type="submit" 
               className="icon-search" 
               value="search">
               </button>
            </form>
            <button
               type="button"
               className="button-clear"
               onClick={() => dispatch(loadSearch(""))}
            >
               Очистить поиск
            </button>
         </div>
         <div>
            {filmsArray.length > 0 ? (
               filmsArray
                  .slice(0, 8)
                  .map((film) => (
                     <MainPageShow props={film["show"]} key={film.show.id} />
                  ))
            ) : (
               <div className="search__result-none">Введите ваш запрос</div>
            )}
         </div>
      </div>
   );
};

export { routeMain };

export default SearchPage;
