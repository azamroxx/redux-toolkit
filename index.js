const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/cake/icecream/icecreamSlice").icecreamActions;

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  // console.log("Updated State", store.getState()); // middleware gonna take care of it
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(3));

unsubscribe();
