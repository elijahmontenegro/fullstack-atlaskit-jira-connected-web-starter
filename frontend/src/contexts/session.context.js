import React, { useReducer, createContext } from 'react';
import Cookie from 'js-cookie';

const SessionContext = createContext();
// instead of a session use query me (graphql)

const { jwt: token } = Cookie.get(); // Need to send request to backend to provide decrypted session

const initialState = {
  isUserAuthenticated: token ? true : false, // would be wise to check if theirs real data here ( would then need to verify the jwt 
  jwt: token
};

// jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//   console.log('token verification:', err, decoded);
// });

function reducer(state, action) {
  const { payload } = action;

  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isUserAuthenticated: true,
        jwt: payload.jwt
      }

    default:
      return state;
  }
};

const withSessionContext = WrappedComponent => () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SessionContext.Provider value={[state, dispatch]}>
      <WrappedComponent {...state} />
    </SessionContext.Provider>
  )
};

export {
  SessionContext,
  withSessionContext
};