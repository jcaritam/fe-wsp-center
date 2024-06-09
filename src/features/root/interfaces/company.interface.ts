export interface ICompany {
 createdAt: Date;
 updatedAt: Date;
 companyId: string;
 name:      string;
 ruc:       string;
 isActive:  boolean;
}

export interface ICreateCompany {
 name: string;
 ruc : string;
}
