import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

import { selectDetailsAboutFilm } from "store/detail/selectors";
import { loadDetail } from "store/detail/actions";

import { ID } from "types/ID";

import prepareImage from "utils/prepareImage";
import prepareRating from "utils/prepareRating";
import prepareCountry from "utils/prepareCountry";
import prepareDate from "utils/prepareDate";
import prepareSummary from "utils/prepareSummary";
import prepareGenre from "utils/prepareGenre";

import star from "assets/img/star.png";

import routeMain from "./routes";

import "./style.scss";

const FilmDetail = () => {
   const { id } = useParams<ID>();
   const dispatch = useDispatch();
   const detail = useSelector(selectDetailsAboutFilm);
   useEffect(() => {
      dispatch(loadDetail(id));
   }, [id, dispatch]);

   return (
      <section>
         <div>
            {detail ? (
               <div className="container">
                  <div className="detail">
                     <div>
                        {prepareImage(detail.image?.medium, "detail-img")}
                     </div>
                     <div className="detail__info">
                        <div className="detail__info-title">
                           <div className="detail__info-title-name">
                              {detail.name}
                           </div>
                           <div className="detail__info-title-rating">
                              <img
                                 className="detail__info-title-rating--star"
                                 src={star}
                                 alt="star"
                              />
                              {prepareRating(detail.rating?.average)}/10
                           </div>
                        </div>
                        <div className="detail__info-summary">
                           <div className="detail__info-summary-left">
                              <p>Год выхода: </p>
                              <p>Страна: </p>
                              <p>Жанр: </p>
                              <p>Описание: </p>
                           </div>
                           <div className="detail__info-summary-right">
                              <p className="detail__info-prepare">
                                 {prepareDate(detail.premiered)}
                              </p>
                              <p className="detail__info-prepare">
                                 {prepareCountry(detail.network?.country?.name)}
                              </p>
                              <p className="detail__info-prepare">
                                 {prepareGenre(detail.genres?.join(", "))}
                              </p>
                              <p className="detail__info-prepare__summary">
                                 {prepareSummary(detail.summary)}
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            ) : <div>пусто</div>}

         </div>
      </section>
   );
};

export { routeMain };
export default FilmDetail;
