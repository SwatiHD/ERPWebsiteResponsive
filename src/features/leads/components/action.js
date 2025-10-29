export const SUBMIT_FORM_DATA = 'SUBMIT_FORM_DATA';

    export const submitFormData = (data) => ({
      type: SUBMIT_FORM_DATA,
      payload: data, // The form data in JSON-like object format
    });