import { createContext, useContext, useReducer } from "react";
import { Employee, Skill } from "../models";

export interface AppState {
  employees: Employee[];
  skills: Skill[];
}

export interface AppContextType {
  state: AppState;
  dispatch: any;
}

// Initial state for your app
const initialState: AppState = {
  employees: [],
  skills: [],
};

// Reducer function to manage state changes
const appReducer = (
  state: AppState,
  action: {
    type: string;
    payload: any;
  }
) => {
  switch (action.type) {
    case "SET_EMPLOYEES":
      return { ...state, employees: action.payload };
    case "SET_SKILLS":
      return { ...state, skills: action.payload };
    default:
      return state;
  }
};

// Create a context
const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: () => null,
} as AppContextType);

export const useAppContext = () => {
  return useContext(AppContext);
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
