import { createContext, useReducer } from "react";
import { productos } from "./products";

export const ThemeContext = createContext();

const INITIAL_STATE = {
  allProducts: "",
  filterToProduct: [],
  productById: [],
  lengthFiltered: "",
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        allProducts: productos,
        filterToProduct: productos,
      };
    case "SEARCH_PRODUCT":
      return {
        ...state,
        allProducts: state.filterToProduct.filter((prod) => {
          return (
            prod.name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
          );
        }),
        lengthFiltered: state.filterToProduct.filter((prod) => {
          return (
            prod.name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
          );
        }).length,
      };
    case "GET_PROD_BY_ID":
      return {
        ...state,
        productById: productos.filter((prod) => prod.id === action.payload),
      };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
