import { DiplomaResponseData } from "@/types/diplomasApiTypes";
import { createSlice } from "@reduxjs/toolkit";

interface DiplomasState {
  diplomas: DiplomaResponseData[]; // Array of DiplomaResponseData objects
}

const initialState: DiplomasState = {
  diplomas: [], // Empty array to start with
};

const diplomasSlice = createSlice({
  name: "diplomas",
  initialState,
  reducers: {
    setDiplomas: (state, action) => {
      state.diplomas = action.payload;
    },
  },
});

export const { setDiplomas } = diplomasSlice.actions;

export default diplomasSlice.reducer;
