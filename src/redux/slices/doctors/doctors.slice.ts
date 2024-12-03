import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Doctor } from "../../../api/types";

interface InitialState {
  list: Doctor[];
  doctor: Doctor | null;
  isProcessing: boolean;
}

const initialState: InitialState = {
  list: [],
  doctor: null,
  isProcessing: false,
};

const doctorsReducerSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {
    setDoctorList: (state, action: PayloadAction<InitialState["list"]>) => {
      state.list = action.payload;
    },
    setDoctor: (state, action: PayloadAction<InitialState["doctor"]>) => {
      state.doctor = action.payload;
    },
    setIsProcessing: (
      state,
      action: PayloadAction<InitialState["isProcessing"]>
    ) => {
      state.isProcessing = action.payload;
    },
  },
});

export const reducers = doctorsReducerSlice.actions;

export default doctorsReducerSlice.reducer;
