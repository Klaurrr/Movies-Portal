import {  legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducerForDetailPage from "./category/reducer";
import reducerForMainPage from "./main/reducer";
import reducerForDetailFilm from "./detail/reducer";
import reducerForSearchPage from "./search/reducer";

const rootReducer = combineReducers({reducerForDetailPage, reducerForMainPage, reducerForDetailFilm, reducerForSearchPage});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;