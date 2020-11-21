const iState = {
    name: "",
    email: "",
    isLoggedIn: false,
    error: ""
};

const LoginReducer = (state = iState, action) => {
    switch(action.type) {
        case  "SET_USER":
            const newUser = {...state};
                newUser.name = action.name;
                newUser.email = action.email;
                newUser.error = action.error;
                newUser.isLoggedIn = action.isLogged;
            return newUser;
        case "LOGOUT":
            const empty = {};
            return empty;
        default:
            return state;
    }
};

export default LoginReducer;
