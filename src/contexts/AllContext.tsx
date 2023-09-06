"use client";
import { createContext, useReducer } from "react";

type SidebarModeType = {
  type: "SIDEBAR_MODE";
};
type SelectedCategoryType = {
  type: "SELECTED_CATEGORY";
  payload: String;
};

type StateType = {
  sidebarMode: String;
  selectedCategory: String;
};

const initialState = {
  sidebarMode: "hide",
  selectedCategory: "New",
};

type ActionType = SidebarModeType | SelectedCategoryType;

export const AllContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => {} });

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SIDEBAR_MODE":
      return {
        ...state,
        sidebarMode: state.sidebarMode === "hide" ? "show" : "hide",
      };
    case "SELECTED_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AllContext.Provider value={{ state, dispatch }}>
      {children}
    </AllContext.Provider>
  );
};
