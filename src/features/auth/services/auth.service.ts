import wspCenterApi from '../../../api/wsp-center.api';
import { ILoginCredentials, ILoginResponse, IUser } from '../interfaces';

export class AuthService {
  static async login(loginData: ILoginCredentials): Promise<ILoginResponse> {
    try {
      const { data } = await wspCenterApi.post<ILoginResponse>('/auth/login', loginData);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Credenciales inválidas');
    }
  }

  static async checkStatus(): Promise<IUser> {
    try {
      const { data } = await wspCenterApi.get<IUser>('/auth/check-status');
      return data;
     } catch (error) {
      console.error(error);
      throw new Error('No autenticado');
    }
  }
}