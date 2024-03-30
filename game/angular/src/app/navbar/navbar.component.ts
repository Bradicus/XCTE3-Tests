import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

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
    standalone: true,
    imports: [ NgbDropdownModule, RouterModule ],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    public navNode:NavNode = new NavNode("", null);
    collapsed = true;
    
    constructor() {
        var newNode: NavNode;
        var cNode: NavNode;
        newNode = this.addNode(this.navNode, "Entity", null);
        cNode = this.addNode(newNode, "Entity create", "entity/entity-edit");
        newNode = this.addNode(this.navNode, "Stat", null);
        cNode = this.addNode(newNode, "Stat create", "stat/stat-edit");
    }
    
    addNode(toNode: NavNode, name: string, link: string | null): NavNode {
        var newNode = new NavNode(name, link);
        toNode.children.push(newNode);
        return newNode;
    }
}

