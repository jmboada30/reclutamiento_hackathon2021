export interface ResponseCountries {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion?: string;
  languages?: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  flag?: string;
  flags: string[];
  demonyms?: Demonyms;
}

export interface Currencies {
  THB?: Aed;
  BRL?: Aed;
  XCD?: Aed;
  SBD?: Aed;
  KMF?: Aed;
  EUR?: Aed;
  NZD?: Aed;
  KGS?: Aed;
  USD?: Aed;
  XPF?: Aed;
  XOF?: Aed;
  ARS?: Aed;
  UZS?: Aed;
  CHF?: Aed;
  SHP?: Aed;
  BAM?: BAM;
  GEL?: Aed;
  CLP?: Aed;
  UAH?: Aed;
  GHS?: Aed;
  ISK?: Aed;
  ERN?: Aed;
  MMK?: Aed;
  MNT?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  LAK?: Aed;
  SCR?: Aed;
  ALL?: Aed;
  BMD?: Aed;
  TND?: Aed;
  BOB?: Aed;
  CAD?: Aed;
  CVE?: Aed;
  CKD?: Aed;
  CDF?: Aed;
  MZN?: Aed;
  RON?: Aed;
  GYD?: Aed;
  DKK?: Aed;
  TMT?: Aed;
  FOK?: Aed;
  KHR?: Aed;
  BZD?: Aed;
  ANG?: Aed;
  AUD?: Aed;
  HTG?: Aed;
  XAF?: Aed;
  PLN?: Aed;
  OMR?: Aed;
  PHP?: Aed;
  PYG?: Aed;
  MGA?: Aed;
  VUV?: Aed;
  HUF?: Aed;
  KZT?: Aed;
  GBP?: Aed;
  JEP?: Aed;
  DZD?: Aed;
  LKR?: Aed;
  KID?: Aed;
  LYD?: Aed;
  ZAR?: Aed;
  LBP?: Aed;
  SGD?: Aed;
  YER?: Aed;
  HRK?: Aed;
  KYD?: Aed;
  RSD?: Aed;
  HNL?: Aed;
  TRY?: Aed;
  SSP?: Aed;
  GGP?: Aed;
  MAD?: Aed;
  MRU?: Aed;
  EGP?: Aed;
  ILS?: Aed;
  JOD?: Aed;
  AED?: Aed;
  PEN?: Aed;
  RUB?: Aed;
  TTD?: Aed;
  MUR?: Aed;
  UYU?: Aed;
  IDR?: Aed;
  MOP?: Aed;
  NOK?: Aed;
  DJF?: Aed;
  AFN?: Aed;
  GTQ?: Aed;
  CRC?: Aed;
  CZK?: Aed;
  MYR?: Aed;
  BYN?: Aed;
  BBD?: Aed;
  VND?: Aed;
  NGN?: Aed;
  COP?: Aed;
  NPR?: Aed;
  SRD?: Aed;
  MDL?: Aed;
  QAR?: Aed;
  NIO?: Aed;
  AOA?: Aed;
  WST?: Aed;
  IQD?: Aed;
  TZS?: Aed;
  DOP?: Aed;
  AZN?: Aed;
  BND?: Aed;
  HKD?: Aed;
  FKP?: Aed;
  TOP?: Aed;
  KPW?: Aed;
  BWP?: Aed;
  CNY?: Aed;
  INR?: Aed;
  JPY?: Aed;
  ZWB?: Aed;
  BDT?: Aed;
  VES?: Aed;
  KWD?: Aed;
  BGN?: Aed;
  SAR?: Aed;
  TWD?: Aed;
  JMD?: Aed;
  UGX?: Aed;
  SYP?: Aed;
  MXN?: Aed;
  TJS?: Aed;
  SDG?: BAM;
  GNF?: Aed;
  STN?: Aed;
  RWF?: Aed;
  MKD?: Aed;
  FJD?: Aed;
  SOS?: Aed;
  SZL?: Aed;
  BHD?: Aed;
  SEK?: Aed;
  BTN?: Aed;
  NAD?: Aed;
  SLL?: Aed;
  GIP?: Aed;
  KES?: Aed;
  AWG?: Aed;
  AMD?: Aed;
  BIF?: Aed;
  PKR?: Aed;
  LRD?: Aed;
  TVD?: Aed;
  BSD?: Aed;
  GMD?: Aed;
  PGK?: Aed;
  ETB?: Aed;
  MVR?: Aed;
  ZMW?: Aed;
  KRW?: Aed;
  IRR?: Aed;
  PAB?: Aed;
  IMP?: Aed;
  LSL?: Aed;
  MWK?: Aed;
}

export interface Aed {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Name {
  common: string;
  official: string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Antarctic = 'Antarctic',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
}

export enum Status {
  OfficiallyAssigned = 'officially-assigned',
  UserAssigned = 'user-assigned',
}
