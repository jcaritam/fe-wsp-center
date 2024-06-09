export interface IUser {
 userId:   string;
 username: string;
 role:     ERole;
 isActive: boolean;
}

export enum ERole {
 ROOT = 'root',
 ADMIN = 'admin',
 OPERATOR = 'operator',
}

export enum EAuthStatus {
 AUTHENTICATED = 'authenticated',
 NOT_AUTHENTICATED = 'not_authenticated',
 PENDING = 'pending',
}
