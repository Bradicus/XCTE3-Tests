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

    constructor(xmlNode: Element) {
        this.xmlNode = xmlNode;
    }

    public wName(name: string) : AttributeLoader {
        this.names.push(name);
        return this;
    }

    public wClass(clsSpec: CodeElemClassSpec) : AttributeLoader {
        this.clsSpec = clsSpec;
        return this;
    }

    public wModel(model: CodeElemDataSpec) : AttributeLoader {
        this.model = model;
        return this;
    }

    public wVar(varE: CodeElemVariable) : AttributeLoader {
        this.varE = varE;
        return this;
    }

    public wNames(names: string[]) : AttributeLoader {
        this.names.concat(names);
        return this;
    }

    public doInherit() : AttributeLoader {
        this.inheritable = true;
        return this;
    }

    public wArrayDelim(arrayDelim: string) : AttributeLoader {
        this.arrayDelim = arrayDelim;
        return this;
    }

    public isTplAttrib() : AttributeLoader {
        this.isTemplateAttrib = true;
        return this;
    }

    public isRequired() : AttributeLoader {
        this.required = true;
        return this;
    }

    public wDefault(attribDefault: any) : AttributeLoader {
        this.attribDefault = attribDefault
        return this;
    }

    public get() : string | null {
        return this.loadAttrib(this.xmlNode, null);
    }

    public loadAttrib(xmlNode: Element, v: CodeElemVariable | null) : string | null {
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

        return this.defaultValue ?? '';
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
            newVal = newVal.replace("!{ModelName}", this.model.name ?? ":(");
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

