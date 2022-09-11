import React from "react";

import prepareCountry from "utils/prepareCountry";
import prepareGenre from "utils/prepareGenre";
import prepareImage from "utils/prepareImage";
import prepareDate from "utils/prepareDate";

import { routeMain as routeFilmDetail } from "pages/FilmDetail";

import { NavLink } from "react-router-dom";

import IShow from "types/IShow";

import "../../pages/MainPage/style.scss";


interface IProps {
   props: IShow;
}

const MainPageShow: React.FC<IProps> = ({ props }) => {
   return (
      <NavLink
         className="main__item"
         to={routeFilmDetail(props.id?.toString())}
      >
         <div>
            {prepareImage(props.image?.medium,"main__item-img")}
         </div>
         <div className="main__item-info">
            <p className="main__item-info-title">{props.name}</p>
            <p className="main__item-info-subtitle">
               {prepareDate(props.premiered)} (
               {prepareCountry(props.network?.country?.name)})
            </p>
            <p className="main__item-info-subtitle">
               {prepareGenre(props.genres?.join(", "))}
            </p>
         </div>
      </NavLink>
   );
};

export default MainPageShow;
