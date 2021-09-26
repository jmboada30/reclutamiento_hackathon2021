
type Requirements = {
    title: string;
    description: string;
};

export interface Bootcamp {
    title: string;
    totalMembers: number;
    description: string;
    duration: string;
    idCompany: string;
    idDoc?: string;
    requirements: Requirements[];
}