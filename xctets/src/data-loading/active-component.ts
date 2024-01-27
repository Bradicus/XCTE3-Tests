/**
* @class ActiveComponent
* 
*/

import { ProjectElemGenerator } from "../code-structure/project-elem-generator";

export class ActiveComponent {
    static ac: ProjectElemGenerator | null = null;

    public static get() {
        return ActiveComponent.ac;
    }

    public static set(ac: ProjectElemGenerator) {
        this.ac = ac;
    }
}

