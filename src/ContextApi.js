import React, { createContext, useReducer } from "react";
import AppReducer from "/src/Reducers.js";

const initialTeam = {
  players: [],
  pointsleft: 75
};

export const GlobalState = createContext(initialTeam);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialTeam);

  const addPlayer = (id) => {
    console.log(id);
    dispatch({
      type: "ADD_PLAYER",
      payload: id
    });
  };

  const removePlayer = (id) => {
    dispatch({
      type: "REMOVE_PLAYER",
      payload: id
    });
  };

  return (
    <GlobalState.Provider
      value={{
        players: state.players,
        totalpoints: state.pointsleft,
        addPlayer,
        removePlayer
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
