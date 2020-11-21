export const login = (name,email,isLogged,error) => {
    return {
        type: "SET_USER",
        name,
        email,
        error,
        isLogged
    };
};

export const logout = (name,email,isLogged,error) => {
    return {
        type: "LOGOUT",
    };
};

