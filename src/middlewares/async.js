export default function({ dispatch }) {
  return next => action => {
    // Has a promise in the payload - it is the target of this middleware
    // Wait until promise is resolved and dispatches a regular action with the response
    if (action.payload && action.payload.then) {
      return action.payload.then(response => dispatch({ ...action, payload: response }));
    }

    // Not a promise: we do not care about - send to next middleware
    return next(action);
  };
}
