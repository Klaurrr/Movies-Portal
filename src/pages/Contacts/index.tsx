import React from "react";
import routeMain from "./routes";

import "./style.scss";

const Contacts = () => {
   return (
      <section className="container">
         <div className="contact-wrapp">
            <div className="contact-name">
               Усачев 
               Егор
            </div>
            <div className="contact-mail">
               <a href="mailto:UsachevDev@yandex.ru">UsachevDev@yandex.ru</a>
            </div>
            <div className="contact-subtitle">
               <span className="contact-subtitle-js">ES6+</span>,
               <span className="contact-subtitle-react"> React</span>,
               <span className="contact-subtitle-redux"> Redux</span>,
               <span className="contact-subtitle-ts"> TypeScript</span>
            </div>
         </div>
      </section>
   );
};

export { routeMain };
export default Contacts;
