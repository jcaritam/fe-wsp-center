export interface IPhoneNumber {
  createdAt:     Date;
  updatedAt:     Date;
  phoneNumberId: string;
  phoneNumber:   string;
  instance:      string;
  token:         string;
  isActive:      boolean;
}

export interface ICreatePhoneNumber {
  phoneNumber: string;
  instance:    string;
  token:       string;
}