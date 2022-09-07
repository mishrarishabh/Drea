import "./styles.css";
import React, { useContext } from "react";
import data from "/src/Players.json";
import { GlobalState } from "/src/ContextApi";

export default function App() {
  const { players, totalpoints, addPlayer, removePlayer } = useContext(
    GlobalState
  );
  console.log(players);

  const validationFun = (points, role) => {
    let res = {};
    players.forEach((item) => {
      if (res[item.role]) {
        res[item.role]++;
      } else {
        res[item.role] = 1;
      }
    });
    if (points > totalpoints) {
      return true;
    }
    if (role === "Batsman" && res[role] >= 3) {
      return true;
    }
    if (role === "Bowler" && res[role] >= 2) {
      return true;
    }
    if (role === "All-Rounder" && res[role] >= 2) {
      return true;
    }
  };

  const addHandle = (id) => {
    addPlayer(id);
  };

  const removeHandle = (id) => {
    removePlayer(id);
  };
  return (
    <div className="App">
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Points</th>
          </tr>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.role}</td>
                <td>{item.points}</td>
                <td>
                  {item.action === "true" ? (
                    <button
                      disabled={validationFun(item.points, item.role)}
                      style={{ color: "white", backgroundColor: "green" }}
                      onClick={() => addHandle(item.id)}
                    >
                      ADD
                    </button>
                  ) : (
                    <button
                      style={{ color: "white", backgroundColor: "red" }}
                      onClick={() => removeHandle(item.id)}
                    >
                      REMOVE
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div>
        <h1>Selected Team</h1>
        <h2>7 PLAYERS REQUIRED</h2>
        <table>
          {players?.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.role}</td>
              </tr>
            );
          })}
        </table>

        <h2>POINT LEFT {totalpoints}</h2>
      </div>
    </div>
  );
}
