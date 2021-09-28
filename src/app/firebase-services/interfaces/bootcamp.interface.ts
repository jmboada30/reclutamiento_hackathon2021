export interface Bootcamp {
  title: string;
  totalMembers: number;
  description: string;
  duration: string;
  company: { nameCompany: string; idCompany: string };
  idDoc?: string;
  requirements: Requirements[];
  participants: Participant[];
}

export interface Participant {
  idUser: string;
  name: string;
  lastName: string;
  email: string;
  repository: string;
}

interface Requirements {
  title: string;
  description: string;
}
