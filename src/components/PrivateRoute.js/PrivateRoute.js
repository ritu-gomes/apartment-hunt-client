import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../Routes/Routes';

const PrivateRoute = ({ children, ...rest }) => {
    const [user,setUser] = useContext(userContext);
        return (
          <Route
            {...rest}
            render={({ location }) =>
              user.isLoggedIn ? (
                children
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: location }
                  }}
                />
              )
            }
          />
        );
};

export default PrivateRoute;