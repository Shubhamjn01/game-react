import { AuthProvider } from "@pankod/refine-core";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const ACCESS_TOKEN_KEY = "refine-access-token";
export const USER_KEY = "refine-user";

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const { data, status } = await axios.post(
      "http://192.168.1.11:5000/Users/login",
      {
        email: username,
        password,
      }
    );

    if (status === 201) {
      const { access_token } = data;
      localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
      // localStorage.setItem(USER_KEY, JSON.stringify(jwt_decode(access_token)));

      return Promise.resolve();
    }

    return Promise.reject(new Error("Please Enter Correct Data"));
  },
  logout: () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: async () => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (!token) {
      return Promise.reject();
    }

    return Promise.resolve();
  },
  getPermissions: () => Promise.resolve(),
  getUserIdentity: async () => {
    const userData = localStorage.getItem(USER_KEY);
    if (!userData) {
      return Promise.reject();
    }

    const user = JSON.parse(userData);
    return Promise.resolve({
      ...user,
    });
  },
};

export { axios };
