import { Bootcamp } from './bootcamp.interface';
export interface User {
  email: string;
  name: string;
  lastName: string;
  country: string;
  dateBirth: string;
  linkedIn: string;
  repository: string;
  userDescription: string;
  role: 'company' | 'developer';
  idUser?: string;
  aboutUs?: string;
  nameCompany: string;
  webPage?: string;
  password?: string;
  password2?: string;
  myBootcamps?: Bootcamp[];
  bootcampsInscription?: string[];
}
