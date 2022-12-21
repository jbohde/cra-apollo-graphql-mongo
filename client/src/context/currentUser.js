import { createContext, useCallback, useContext, useMemo, useState } from 'react';

export const CurrentUserContext = createContext();

export const useCurrentUserContext = () => useContext(CurrentUserContext);

export default function CurrentUserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({ isAuthenticated: false });

  const isLoggedIn = useCallback(() => currentUser.isAuthenticated, [currentUser.isAuthenticated]);

  const value = useMemo(() => ({
    currentUser,
    setCurrentUser,
    isLoggedIn
  }), [currentUser, setCurrentUser, isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
}
