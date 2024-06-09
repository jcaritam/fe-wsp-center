import wspCenterApi from "../../../api/wsp-center.api";
import { ICompany, ICreateCompany } from "../interfaces/company.interface";

export class CompanyService {

 static async getCompanies() {
  try {
   const { data } = await wspCenterApi.get<ICompany[]>('/company');
   return data;
  } catch (error) {
   console.error(error);
   throw new Error('Error al obtener las empresas');
  }
 }

 static async addCompany(company: ICreateCompany) {
  try {
   const { data } = await wspCenterApi.post<ICompany>('/company', company);
   return data;
  } catch (error) {
   console.error(error);
   throw new Error('Error al crear la empresa');
  }
 }
}