import { Address } from './address';
/**
* @class ProfileUser
* 
*/

export class ProfileUser {
    id: number = 0;
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    
    createdDate: Date = new Date();
    lastLoginDate: Date = new Date();
    mailingAddress: Address = new Address();
    physicalAddress: Address = new Address();
    themeId: number = 0;
}

