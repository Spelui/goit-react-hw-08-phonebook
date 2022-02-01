import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      toast.success("Register successed");
      return data;
    } catch (error) {
      toast.error(`${"Something went wrong please try again"}`);
      return rejectWithValue(error);

      // TODO: Добавить обработку ошибки error.message
    }
  }
);

const loginIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      token.set(data.token);
      toast.success("You Log IN");
      return data;
    } catch (error) {
      toast.error(`${"Something went wrong please try again"}`);
      return rejectWithValue(error);
    }
  }
);

const loginOut = createAsyncThunk(
  "auth/logout",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/logout", credentials);
      token.unset();
      toast.success("You Log OUT");
      return data;
    } catch (error) {
      toast.error(`${"Something went wrong please try again"}`);
      return rejectWithValue(error);
    }
  }
);

const fetchCurentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persisterToken = state.auth.token;

    if (persisterToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persisterToken);

    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      // toast.error(`${"Something went wrong please try again"}`);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const authOperations = {
  register,
  loginIn,
  loginOut,
  fetchCurentUser,
};

export default authOperations;
