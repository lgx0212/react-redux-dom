const initState = { value: 0 };
const reducer = (state = initState, action) => {
  console.log(state);
  const { type } = action;
  switch (type) {
    case "add":
      return {...state,value:state.value+1};
    default:
      return state;
  }
};
export default reducer;
