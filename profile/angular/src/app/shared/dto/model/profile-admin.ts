import { Address } from './address';
import { Role } from './role';

/**
* @class ProfileAdmin
* 
*/
export class ProfileAdmin {
    id: number = 0;
    firstName: string = "";
    lastName: string = "";
    username: string = "";
    email: string = "";
    
    createdDate: Date = new Date();
    lastLoginDate: Date = new Date();
    mailingAddress: Address = new Address();
    physicalAddress: Address = new Address();
    roles: Role[] = [];
    themeId: number = 0;
    active: boolean = false;
}

