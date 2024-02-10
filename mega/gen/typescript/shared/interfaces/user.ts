export interface User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    createdDate: Date;
    lastLoginDate: Date;
    mailingAddress: Address;
    physicalAddress: Address;
    roles: string[];
    active: boolean;
    theme: string;
}

