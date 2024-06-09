import type { IUser } from "./user.interface";

export interface ILoginCredentials {
 username: string;
 password: string;
}

export interface ILoginResponse {
 token: string;
 user: IUser;
}