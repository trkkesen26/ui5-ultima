import { BaseSettings } from "{{APP_BASE_PATH}}/types/core/Base.types";

export type {{CLASS_NAME}}Settings = BaseSettings & {

};

declare module "{{MODULE}}" {
    export default interface {{CLASS_NAME}} {

    }
}