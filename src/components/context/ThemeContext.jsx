import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    return <ThemeContext.Provider value={{isDarkMode, setIsDarkMode}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContextProvider