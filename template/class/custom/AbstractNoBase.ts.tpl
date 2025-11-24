import BaseController from "{{APP_BASE_PATH}}/controller/BaseController";
import ManagedObject from "sap/ui/base/ManagedObject";
import { ClassMetadata } from "{{APP_BASE_PATH}}/types/global/CustomClass.types";
import { {{CLASS_NAME}}Settings } from "{{CLASS_TYPE_PATH}}.types";

/**
 * @namespace {{CLASS_NAMESPACE}}
 */
export default abstract class {{CLASS_NAME}} extends ManagedObject {
    public static readonly metadata: ClassMetadata = {
        abstract: true
    };
    private controller: BaseController;

    constructor(controller: BaseController, settings?: {{CLASS_NAME}}Settings) {
        super(settings);
        this.controller = controller;
    }
}