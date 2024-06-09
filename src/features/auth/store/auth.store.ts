import { create, StateCreator } from "zustand";
import { EAuthStatus, IUser } from "../interfaces/user.interface";
import { ILoginCredentials } from "../interfaces";
import { AuthService } from "../services";
import { devtools } from "zustand/middleware";


interface IAuthStore {
 status: EAuthStatus;
 user?: IUser;
 loginUser: (loginCredentials: ILoginCredentials) => Promise<void>;
 checkAuthStatus: () => Promise<void>;
 // logoutUser: () => Promise<void>;
}

const authStoreApi: StateCreator<IAuthStore> = ((set) => ({
 status: EAuthStatus.PENDING,
 user: undefined,

 loginUser: async (loginCredentials: ILoginCredentials) => {
  try {
   const { token, user } = await AuthService.login(loginCredentials);
   localStorage.setItem('accessToken', token);
   set({ status: EAuthStatus.AUTHENTICATED, user });
  } catch (error) {
   set({ status: EAuthStatus.NOT_AUTHENTICATED });
   throw error;
  }
 },

 checkAuthStatus: async () => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
   set({ status: EAuthStatus.NOT_AUTHENTICATED });
   return;
  }
  try {
   const user = await AuthService.checkStatus();
   set({ status: EAuthStatus.AUTHENTICATED, user });
  } catch (error) {
   set({ status: EAuthStatus.NOT_AUTHENTICATED });
   throw error;
  }
 },
 logoutUser: () => {
  // set({ isAuthenticated: EAuthStatus.NOT_AUTHENTICATED });
 }
}));

export const useAuthStore = create<IAuthStore>()(
 devtools(authStoreApi)
);