
const ADD_TEXT = 'ADD_TEXT';
const UPDATE_TEXT = 'UPDATE_TEXT';
let initState = {
    navItems: [
        {id: '1', name: 'dfdsf1', isNew:false},
        {id: '2', name: 'dfdsf2', isNew:false},
        {id: '3', name: 'dfdsf3', isNew:false},
        {id: '4', name: 'dfdsf4', isNew:false},
        {id: '5', name: 'dfdsf5', isNew:false},
    ],
    newPostText: "hi hi"
};

const navReducer = (state = initState, action) => {
    let copyState = {...state};
    copyState.navItems = [...copyState.navItems];
    return copyState;
};

export default navReducer;