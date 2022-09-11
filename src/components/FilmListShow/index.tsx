import React from "react";

import { NavLink } from "react-router-dom";

import { routeMain as routeFilmDetail } from "pages/FilmDetail";

import prepareImage from "utils/prepareImage";
import prepareGenre from "utils/prepareGenre";

import IShow from "types/IShow";

import "../../pages/FilmListPage/style.scss";

interface IList {
   list: IShow;
}

const FilmListShow: React.FC<IList> = ({ list }) => {
   return (
      <NavLink
         className="category__item"
         key={list.id}
         to={routeFilmDetail(list.id?.toString())}
      >
         <div>
            {prepareImage(list.image?.medium, "category__item-img")}
         </div>
         <div className="category__item-info">
            <p className="category__item-info-title">{list.name}</p>
            <p className="category__item-info-subtitle">
               {prepareGenre(list.genres?.join(", "))}
            </p>
         </div>
      </NavLink>
   );
};

export default FilmListShow;
