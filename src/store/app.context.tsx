import { createContext, useContext, useReducer } from "react";
import { Employee, Skill } from "../models";

// Create a context
const AppContext = createContext<any>("");

export const useAppContext = () => {
  return useContext(AppContext);
};

export interface AppState {
  employees: Employee[];
  skills: Skill[];
}

// Initial state for your app
const initialState: any = {};

// Reducer function to manage state changes
const appReducer = (state: any, action: any) => {
};

// Create a provider component
export const AppProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
