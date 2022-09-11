import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppContent from "components/AppContent";

const App = () => {
   return (
      <BrowserRouter>
         <AppContent />
      </BrowserRouter>
   );
};

export default App;
