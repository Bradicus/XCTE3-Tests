import { Permission } from './permission';
/**
* @class Role
* 
*/

export class Role {
    id: number = 0;
    name: string = "";
    description: string = "";
    permissions: Permission[] = [];
}

