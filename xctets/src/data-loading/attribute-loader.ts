/**
* @class AttributeLoader
* 
*/

import { CodeElemClassSpec } from "../code-structure/code-elem-class-spec";
import { CodeElemDataSpec } from "../code-structure/code-elem-data-spec";
import { CodeElemTemplate } from "../code-structure/code-elem-template";
import { CodeElemVariable } from "../code-structure/code-elem-variable";
import { ActiveComponent } from "./active-component";

export class AttributeLoader {
    names: string[] = [];
    model: CodeElemDataSpec | null = null;
    clsSpec: CodeElemClassSpec | null = null;
    varE: CodeElemVariable | null = null;
    xmlNode: any = null;
    attribDefault: any = null;
    defaultValue: any = null;
    inheritable: boolean = false;
    arrayDelim: string | null = null;
    isTemplateAttrib = false;
    required = false;

    constructor(xmlNode: any) {
        this.xmlNode = xmlNode;
    }

    public wName(name: string) {
        this.names.push(name);
        return self;
    }

    public wClass(clsSpec: CodeElemClassSpec) {
        this.clsSpec = clsSpec;
        return self;
    }

    public wModel(model: CodeElemDataSpec) {
        this.model = model;
        return self;
    }

    public wVar(varE: CodeElemVariable) {
        this.varE = varE;
        return self;
    }

    public wNames(names: string[]) {
        this.names.concat(names);
        return self;
    }

    public doInherit() {
        this.inheritable = true;
        return self;
    }

    public wArrayDelim(arrayDelim: string) {
        this.arrayDelim = arrayDelim;
        return self;
    }

    public isTplAttrib() {
        this.isTemplateAttrib = true;
        return self;
    }

    public isRequired() {
        this.required = true;
        return self;
    }


    public wDefault(attribDefault: any) {
        this.attribDefault = attribDefault
        return self;
    }

    public get(attrib: CodeElemVariable | null) {
        this.loadAttrib(this.xmlNode, attrib);
    }

    public loadAttrib(xmlNode: Node, v: CodeElemVariable | null) {
        for (const name of this.names) {
            var atr = this.getAttribute(xmlNode, name);

            if (atr != null) {
                let value: string | null = null;
                if (ActiveComponent.get() != null) {
                    value = this.processBuildVars(atr);
                    if (this.arrayDelim != null) {
                        let arrValue = value.split(this.arrayDelim).map(element => {
                            return element.trim();
                        });
                    }
                }

                if (this.isTemplateAttrib && value != null) {
                    let tplItems = value.split(",")
                    for (const tplItem of tplItems) {
                        let tplC = new CodeElemTemplate(tplItem.trim())
                        v?.templates.push(tplC)
                    }
                }

                return value;
            }
        }
    }

    public getAttribute(aXml: any, atrName: string) {
        var atr: string | null = null;

        if (ActiveComponent.get() != null) {
            atr = aXml[atrName + "-" + ActiveComponent.get()?.language]
        }

        if (atr == null) {
            // Check for regular version of attrib
            atr = aXml[atrName]
        }

        return atr
    }

    public processBuildVars(value: string) {
        let newVal = value;

        ActiveComponent.get()?.buildVars?.forEach(bv => {
            newVal = newVal.replace("$" + bv.name, bv.value);
            newVal = newVal.replace("{" + bv.name + "}", bv.value);
        });

        if (this.model != null) {
            newVal = newVal.replace("!{ModelName}", this.model.name);
        }

        if (this.clsSpec != null && this.clsSpec?.featureGroup != null) {
            newVal = newVal.replace("!{FeatureGroup}", this.clsSpec.featureGroup);
        } else {
            newVal = newVal.replace("!{FeatureGroup}", "");
        }

        if (this.clsSpec != null && this.clsSpec?.variant != null) {
            newVal = newVal.replace("!{ClassGroupVariant}", this.clsSpec.variant);
        } else {
            newVal = newVal.replace("!{ClassGroupVariant}", "");
        }

        if (this.clsSpec != null && this.clsSpec?.classGroupRef != null && this.clsSpec.classGroupRef.name != null) {
            newVal = newVal.replace("!{ClassGroupName}", this.clsSpec.classGroupRef.name);
        } else {
            newVal = newVal.replace("!{ClassGroupName}", "");
        }

        return newVal.trim();
    }
}

