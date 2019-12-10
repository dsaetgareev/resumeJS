

const ADD_NAV_ITEM = 'ADD_NAV_ITEM';
const UPDATE_TEXT = 'UPDATE_TEXT';

let initState = {
    navPage: {
        navItems: [
            {id: '1', name: 'testing'},
        ],
    }
};

const navReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_NAV_ITEM:
            let item =
                {
                    id: '2',
                    name: action.name

                };
            let addCopyState = {...state};
            addCopyState.navPage.navItems = [...state.navPage.navItems];
            addCopyState.navPage.navItems.push(item);
            return addCopyState;
        default:
            return state;

    }
};

export const addNavItemActionCreator = (name) => {
    return {
        type: ADD_NAV_ITEM,
        name: name
    }
};

export default navReducer;