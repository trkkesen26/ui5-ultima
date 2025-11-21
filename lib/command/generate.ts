import { Command } from "commander";
import Generator from "../service/Generator";

export default new Command("generate")
    .description("Generate a free-style SAPUI5 application")
    .action(async () => {
        const generator = new Generator();
        await generator.generate();
    });