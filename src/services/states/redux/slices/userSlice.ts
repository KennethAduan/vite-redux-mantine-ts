import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Modify the state type and arg types to match your needs
interface userState {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
}

const initialState: userState = {
  firstname: "",
  lastname: "",
  username: "",
  password: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    userInfoRedux: (
      state: userState,
      action: PayloadAction<Partial<userState>>
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearUserInfoRedux: () => {
      return initialState;
    },
  },
});

export const { userInfoRedux, clearUserInfoRedux } = userSlice.actions;

export default userSlice.reducer;
