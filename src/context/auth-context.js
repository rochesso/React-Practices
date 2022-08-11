import React, { useState } from 'react';

export const AuthContext = React.createContext({
  isAuth: false,
  login: () => {},
  uri: '',
});

const AuthContextProvider = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginHandler = () => {
    setIsAuthenticated(true);
  };

  const context = {
    login: loginHandler,
    isAuth: isAuthenticated,
    // Paste your firebase database link below
    uri: 'https://firebase-default.europe-west1.firebasedatabase.app/',
  };
  // You need to change the rules inside your firebase database as below:
  //   {
  //   "rules": {
  //     ".read": true,
  //     ".write": true,
  //     "ingredients": {
  //       ".indexOn": ["title"]
  //     }
  //   }
  // }

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
