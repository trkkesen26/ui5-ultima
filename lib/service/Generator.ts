import { confirm, input } from "@inquirer/prompts";

export default class Generator {
    private uiModule: string;
    private namespace: string;
    private version: string;
    private view: string;
    private base: boolean;
    private odata: boolean;
    private fragment: boolean;

    public async generate() {
        await this.prompt();
    }

    private async prompt() {
        this.uiModule = await this.getUIModule();
        this.namespace = await this.getNamespace();
        this.version = await this.getVersion();
        this.view = await this.getView();
        this.base = await this.includeBaseClass();
        this.odata = await this.includeODataClasses();
        this.fragment = await this.includeFragmentClass();
    }

    private async getUIModule() {
        return input({
            message: "Enter UI module name",
            validate: (value) => {
                const regex = /^[a-z](?:[a-z0-9]*(?:-[a-z0-9]+)*)?$/;

                if (!regex.test(value)) {
                    return "Invalid module name. " +
                        "Must start with a lowercase letter, can contain numbers and single dashes, cannot end with a dash or have consecutive dashes.";
                }

                return true;
            }
        });
    }

    private async getNamespace() {
        return input({
            message: "Enter a namespace",
            validate: (value) => {
                const regex = /^[a-z](?:[a-z0-9]*(?:\.[a-z0-9]+)*)?$/;

                if (!regex.test(value)) {
                    return "Invalid namespace. " +
                        "Must start with a lowercase letter, can contain numbers and single dots, and cannot end with a dot or have consecutive dots.";
                }

                return true;
            }
        });
    }

    private async getVersion() {
        return "1.136.11";
    }

    private async getView() {
        return input({
            message: "Enter the initial view name",
            validate: (value) => {
                const regex = /^[A-Z][a-zA-Z]*$/;

                if (!regex.test(value)) {
                    return "Invalid View name. Must start with an uppercase letter and contain only letters.";
                }

                return true;
            }
        });
    }

    private async includeBaseClass() {
        return confirm({
            message: "Would you like to include the Base class?",
            default: true
        });
    }

    private async includeODataClasses() {
        return confirm({
            message: "Would you like to include the OData classes?",
            default: true
        });
    }

    private async includeFragmentClass() {
        return confirm({
            message: "Would you like to include the Fragment class?",
            default: true
        });
    }
}