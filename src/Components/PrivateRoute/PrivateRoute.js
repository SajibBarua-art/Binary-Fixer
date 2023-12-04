// Import necessary dependencies
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

// Define a PrivateRoute component
const PrivateRoute = ({ children, ...rest }) => {
    // Access the user state from the UserContext using useContext
    const [userState] = useContext(UserContext);
    console.log(userState);

    // Render the Route component
    return (
        <Route
            // Spread the rest of the props onto the Route component
            {...rest}
            // Render a function that takes route props
            render={({ location }) =>
                // Check if the user is authenticated (in this case, if there is an email in the userState)
                userState.email ? (
                    // If authenticated, render the children components
                    children
                ) : (
                    // If not authenticated, redirect to the login page with the current location
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

// Export the PrivateRoute component
export default PrivateRoute;