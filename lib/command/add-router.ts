import { Command } from "commander";
import Util from "../service/Util";
import RouterService from "../service/RouterService";


export default new Command("add-router")
    .description(Util.getCommandDescription(
        "Adds the standalone Approuter files. Router files are generated in the router directory.\n" +
        "WARNING: This action overrides router related files if already exist!"
    ))
    .action(async () => {
        const router = new RouterService();
        await router.add();
    });