import { createSlice } from "@reduxjs/toolkit";

// Alert action
export const setAlert =(alert)=> async (dispatch) => {
  dispatch(showAlert(alert))
  setTimeout(()=> {
    dispatch(clearAlert())
  }, 5000)
}

const initialState = {
  msg: "",
  alert: false
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert: (state, action) => {
      return {
        ...state,
        alert: true,
        msg: action.payload
      }
    },
    clearAlert: (state) => {
      return {
        ...state,
        alert: false,
        msg: ""
      }
    },
  },
});

export const { showAlert, clearAlert } = alertSlice.actions;

export default alertSlice.reducer;
