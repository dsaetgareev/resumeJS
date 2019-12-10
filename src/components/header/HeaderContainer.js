
import {connect} from "react-redux";
import Header from "./Header";
import {addTextActionCreator, updateEditableActionCreator} from "../../store/reducers/desktop/DesktopReducer";
import {addNotesTextActionCreator, updateNotesEditableActionCreator} from "../../store/reducers/desktop/NotesReducer";
import {
    addDescTextActionCreator,
    updateDescEditableActionCreator
} from "../../store/reducers/desktop/DescriptionReducer";
import {addNavItemActionCreator} from "../../store/reducers/nav/NavbarReducer";

let mapStateToPropsHead = (state) => {
    debugger
    return {
        desktopPage: state.desktopPage,
        descPage: state.descPage,
        notesPage: state.notesPage
    }
};
let mapDispatchToPropsHead = (dispatch) => {
    debugger
    return {
        updateHeadEditable: (desktopState, descState, notesState) => {
            dispatch(updateEditableActionCreator(desktopState.heading, desktopState.body, desktopState.editable));
            dispatch(updateDescEditableActionCreator(descState.desc, descState.descEditable));
            dispatch(updateNotesEditableActionCreator(notesState.notes, notesState.editable));
            dispatch(addNavItemActionCreator(desktopState.heading));
        },
        addNewDesktop: () => {
            dispatch(addTextActionCreator());
            dispatch(addDescTextActionCreator());
            dispatch(addNotesTextActionCreator());
        }
    };
};

let HeaderContainer = connect(mapStateToPropsHead, mapDispatchToPropsHead)(Header);

export default HeaderContainer