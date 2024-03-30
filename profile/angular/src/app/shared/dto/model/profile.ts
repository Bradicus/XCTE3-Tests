import { Address } from './address';
import { Role } from './role';
import { Theme } from './theme';

/**
* @class Profile
* 
*/
export class Profile {
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
    theme: Theme = new Theme();
    active: boolean = false;
}

