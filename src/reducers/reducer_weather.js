import { FETCH_WEATHER } from '../actions/index.js'

export default function (state = [], action){
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]; //ES6 for: return state.concat([action.payload.data])
      // returns a new state instead of mutating state. mutating state won't work

  }
  return state;
}
