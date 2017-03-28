import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // dont mutate state !!!!!
      // rather, return a new instance
      // return state.concat([action.payload.data]);
      // ok, b/c concat doesn't mutate state
      // but below is more terse
      console.log(action.payload.data)
      return [action.payload.data, ...state];
  }
  return state;
}