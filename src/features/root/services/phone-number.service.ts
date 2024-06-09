import wspCenterApi from "../../../api/wsp-center.api";
import { IPhoneNumber } from "../interfaces";

export class PhoneNumberService {
  public static async getPhoneNumbersByCompany(companyId: string): Promise<IPhoneNumber[]> {
    try {
      const { data } = await wspCenterApi.get<IPhoneNumber[]>(
        `/phone-number/company/${companyId}`
      );
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener los números de teléfono');
    }
  }
}