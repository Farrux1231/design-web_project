const store = JSON.parse(localStorage.getItem("store"));

export const initialState = store || {
  changePage: true,
  saved: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "changePage":
      const newState = {
        ...state,
        changePage: action.payload, 
      };
      localStorage.setItem("store", JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
};
