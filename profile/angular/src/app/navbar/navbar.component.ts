import { Component } from '@angular/core';

/**
* @class NavbarComponent
* 
*/
class NavNode {
    name: string;
    url: string | null;
    children: NavNode[] = [];
    constructor(name: string, url: string | null) {
        this.name = name;
        this.url = url;
    }
}

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    public navNode:NavNode = new NavNode("", null);
    collapsed = true;
    
    constructor() {
        var newNode: NavNode;
        var cNode: NavNode;
        newNode = this.addNode(this.navNode, "Address", null);
        cNode = this.addNode(newNode, "Address create", "/address/address-edit");
        cNode = this.addNode(newNode, "Address listing", "/address/address-listing");
        newNode = this.addNode(this.navNode, "Permission", null);
        cNode = this.addNode(newNode, "Permission listing", "/permission/permission-listing");
        cNode = this.addNode(newNode, "Permission create", "/permission/permission-edit");
        newNode = this.addNode(this.navNode, "Profile", null);
        cNode = this.addNode(newNode, "Profile create", "/profile/profile-admin-edit");
        cNode = this.addNode(newNode, "Profile listing", "/profile/profile-listing");
        cNode = this.addNode(newNode, "Profile create", "/profile/profile-user-edit");
        newNode = this.addNode(this.navNode, "Role", null);
        cNode = this.addNode(newNode, "Role listing", "/role/role-listing");
        cNode = this.addNode(newNode, "Role create", "/role/role-edit");
        newNode = this.addNode(this.navNode, "Theme", null);
        cNode = this.addNode(newNode, "Theme listing", "/theme/theme-listing");
        cNode = this.addNode(newNode, "Theme create", "/theme/theme-edit");
    }
    
    addNode(toNode: NavNode, name: string, link: string | null): NavNode {
        var newNode = new NavNode(name, link);
        toNode.children.push(newNode);
        return newNode;
    }
}

