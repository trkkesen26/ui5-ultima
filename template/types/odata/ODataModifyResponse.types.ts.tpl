/* eslint-disable @typescript-eslint/no-explicit-any */
import { $ManagedObjectSettings } from "sap/ui/base/ManagedObject";
import { PropertyGetter, PropertySetter } from "{{UI5_PATH}}/types/global/CustomClass.types";
import { ODataRequestError } from "{{UI5_PATH}}/types/odata/ODataSubmitResponse.types";

export type ODataModifyRawResponse = Record<string, any> | ODataRequestError;

export type ODataModifyResponseSettings = $ManagedObjectSettings & {
    rawResponse?: ODataModifyRawResponse;
};

declare module "{{UI5_PATH}}/lib/odata/ODataModifyResponse" {
    export default interface ODataModifyResponse {
        getRawResponse: PropertyGetter<ODataModifyRawResponse | undefined>;
        setRawResponse: PropertySetter<ODataModifyRawResponse | undefined>;
    }
}