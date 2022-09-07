import data from "/src/Players.json";

export default (state, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      const datares = data.filter((item) => item.id === action.payload);
      data.forEach((item) => {
        if (item.id === action.payload) {
          item.action = "false";
        }
      });

      return {
        ...state,
        players: [...state.players, ...datares],
        pointsleft: state.pointsleft - datares[0].points
      };

    case "REMOVE_PLAYER":
      let points;
      data.forEach((item) => {
        if (item.id === action.payload) {
          item.action = "true";
          points = item.points;
        }
      });
      return {
        ...state,
        players: state.players.filter((item) => {
          return item.id !== action.payload;
        }),
        pointsleft: state.pointsleft + parseInt(points)
      };

    default:
      return state;
  }
};
