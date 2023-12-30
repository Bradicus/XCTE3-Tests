/**
* @class ProfileAdmin
* 
*/

class ProfileAdmin {
    id: number;
    firstName: string;
    lastName: string;
    pusername: string;
    email: string;
    
    createdDate: Date;
    lastLoginDate: Date;
    mailingAddress: Address;
    physicalAddress: Address;
    roles: Role[];
    themeId: number;
    active: boolean;
    
}
