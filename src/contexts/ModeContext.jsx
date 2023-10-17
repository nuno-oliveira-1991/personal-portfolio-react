import { createContext, useContext, useState } from "react";

const ModeContext = createContext();

export const useModeContext = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useModeContext must be used within a ModeContextProvider")
  }
  return context
};

export const ModeContextProvider = ({ children }) => {
  const [portfolioMode, setPortfolioMode] = useState(undefined);
  const [isMobile, setIsMobile] = useState(false);


  const contextValue = {
    portfolioMode,
    setPortfolioMode,
    isMobile,
    setIsMobile
  };

  return (
    <ModeContext.Provider value={contextValue}>
      {children}
    </ModeContext.Provider>
  )
};