
    import { SUBMIT_FORM_DATA } from './action'

    const initialState = {
      submittedData: null,
    };

    const formReducer = (state = initialState, action) => {
      switch (action.type) {
        case SUBMIT_FORM_DATA:
          return {
            ...state,
            submittedData: action.payload, // Store the form data
          };
        default:
          return state;
      }
    };

    export default formReducer;