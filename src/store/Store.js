import {combineReducers, createStore} from "redux";
import navReducer from "./reducers/nav/NavbarReducer";
import desktopReducer from "./reducers/desktop/DesktopReducer";
import descriptionReducer from "./reducers/desktop/DescriptionReducer";
import notesReducer from "./reducers/desktop/NotesReducer";

let reducers = combineReducers({
    navItems: navReducer,
    desktopPage: desktopReducer,
    descPage: descriptionReducer,
    notesPage: notesReducer
});

let store = createStore(reducers);

export default store;