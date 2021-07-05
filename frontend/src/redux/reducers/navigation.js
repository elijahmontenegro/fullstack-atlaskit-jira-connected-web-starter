const initialState = {
  isRedirecting: false,
  message: null,
};

export default function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case 'REDIRECT_TO_LOGIN': {
      window.location = process.env.REACT_APP_AUTH_URL_LOGIN;

      return {
        ...state,
        isRedirecting: true,
        message: "Please wait…"
      };
    }

    case 'REDIRECT_TO_LOGOUT': {
      window.location = process.env.REACT_APP_AUTH_URL_LOGOUT;

      return {
        ...state,
        isRedirecting: true,
        message: "Processing…"
      };
    }

    default:
      return state
  }
}