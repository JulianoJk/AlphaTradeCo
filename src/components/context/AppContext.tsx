import { PaletteMode } from "@mui/material";
import React, { useContext, useReducer } from "react";

// import { ColorScheme } from '@mantine/core';
interface IAppStateContext {
  mode: PaletteMode;
}
export interface IChildrenProvider {
  children: React.ReactNode;
}

// Default state fot the Application context
const defaultState: IAppStateContext = {
  mode: "dark",
};
type TApplicationAction = {
  type: "SET_APP_THEME";
  mode: PaletteMode;
};

const ApplicationState = React.createContext<IAppStateContext | undefined>(
  undefined
);
// *** Dispatch ***
type ApplicationDispatchContext = (action: TApplicationAction) => void;

ApplicationState.displayName = "ApplicationState";
const ApplicationDispatch = React.createContext<
  ApplicationDispatchContext | undefined
>(undefined);

// Reducer function
const appReducer = (state: IAppStateContext, action: TApplicationAction) => {
  switch (action.type) {
    case "SET_APP_THEME":
      return { ...state, mode: action.mode };
  }
};
// Context Provider for the user
const AppContextProvider = ({ children }: IChildrenProvider) => {
  const [appState, appDispatch] = useReducer(appReducer, defaultState);

  return (
    <ApplicationState.Provider value={appState}>
      <ApplicationDispatch.Provider value={appDispatch}>
        {children}
      </ApplicationDispatch.Provider>
    </ApplicationState.Provider>
  );
};
// Pass the state of the user
const useAppState = (): IAppStateContext => {
  const context = useContext(ApplicationState);
  if (context === undefined) {
    throw new Error("AppState must be used within AppStateContext");
  }
  return context;
};

// Function to use the userDispatch
const useAppDispatch = (): ApplicationDispatchContext => {
  const context = useContext(ApplicationDispatch);
  if (context === undefined) {
    throw new Error("useAppDispatch must be used within AppDispatchContext");
  }
  return context;
};

export { AppContextProvider, useAppState, useAppDispatch };
