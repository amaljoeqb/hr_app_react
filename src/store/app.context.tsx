import { createContext, useContext, useReducer } from "react";
import { Department, Employee, Skill } from "../models";

export interface AppState {
  employees: Employee[];
  skills: Skill[];
  departments: Department[];
}

export interface AppContextType {
  state: AppState;
  dispatch: any;
}

// Initial state for your app
const initialState: AppState = {
  employees: [],
  skills: [],
  departments: [],
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
    case "SET_EMPLOYEES": {
      localStorage.setItem("employees", JSON.stringify(action.payload));
      return { ...state, employees: action.payload };
    }
    case "SET_SKILLS": {
      localStorage.setItem("skills", JSON.stringify(action.payload));
      return { ...state, skills: action.payload };
    }
    case "SET_DEPARTMENTS": {
      localStorage.setItem("departments", JSON.stringify(action.payload));
      return { ...state, departments: action.payload };
    }
    case "ADD_EMPLOYEE": {
      const employees = [...state.employees, action.payload];
      localStorage.setItem("employees", JSON.stringify(employees));
      return { ...state, employees };
    }
    case "UPDATE_EMPLOYEE": {
      const employees = state.employees.map((employee) => {
        if (employee.employeeId === action.payload.employeeId) {
          return action.payload;
        }
        return employee;
      });
      localStorage.setItem("employees", JSON.stringify(employees));
      return {
        ...state,
        employees,
      };
    }
    case "DELETE_EMPLOYEE": {
      const employees = state.employees.filter(
        (employee) => employee.employeeId !== action.payload
      );
      localStorage.setItem("employees", JSON.stringify(employees));
      return {
        ...state,
        employees,
      };
    }
    case "ADD_SKILL": {
      const skills = [...state.skills, action.payload];
      localStorage.setItem("skills", JSON.stringify(skills));
      return { ...state, skills };
    }
    default: {
      return state;
    }
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
