/**
* @class ProfileListing
* 
*/

export class ProfileListing {
    id: number = 0;
    firstName: string = "";
    lastName: string = "";
    pusername: string = "";
    email: string = "";
    
    createdDate: Date = new Date();
    lastLoginDate: Date = new Date();
    active: boolean = false;
}

