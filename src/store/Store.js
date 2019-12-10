import {combineReducers, createStore} from "redux";
import desktopReducer from "./reducers/desktop/DesktopReducer";
import descriptionReducer from "./reducers/desktop/DescriptionReducer";
import notesReducer from "./reducers/desktop/NotesReducer";
import dataBaseReducer from "./reducers/desktop/DataBaseReducer";

let reducers = combineReducers({
    desktopPage: desktopReducer,
    descPage: descriptionReducer,
    notesPage: notesReducer,
    pages: dataBaseReducer
});

let store = createStore(reducers);

export default store;