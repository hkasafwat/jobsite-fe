import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState();

  useEffect (() => {
    const themeValue = localStorage.getItem("jobsite_theme");
    if(themeValue && themeValue.length > 0) {
      setTheme(JSON.parse(themeValue))
    }
    
    const userValue = localStorage.getItem("jobsite_user");
    if(userValue && userValue.length > 0) {
      setUser(JSON.parse(userValue))
    }

  }, []);

  const dispatchEvent = (actionType, payload) => {
    switch (actionType) {
      case "LOGIN":
        localStorage.setItem("jobsite_user", JSON.stringify(payload));
        return;
      case "REGISTER":
        setUser(payload);
        return;
      case "LOGOUT":
        localStorage.removeItem('jobsite_user');
        location.reload();
        return;

    }
  };

  return (
    <AppContext.Provider value={{ theme, user, dispatchEvent }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
