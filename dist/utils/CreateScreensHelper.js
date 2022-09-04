import * as fs from "fs";
import { ScreensFolder } from "../constants/FoldersNames.js";
import { checkIfFolderExistInCurrentDirectory } from "./FsHelpers.js";
import { StatefullScreenContent, StatelessScreenContent } from "./ScreensContent.js";
export var CreateScreen = function (screenName, screenFileName, isStateless, isNeedAppbar, isNeedBottomNavigationBar) {
    if (checkIfFolderExistInCurrentDirectory(ScreensFolder) == false) {
        fs.mkdirSync("".concat(process.cwd(), "/").concat(ScreensFolder));
    }
    CreateScreenFileAndContent(screenName, screenFileName, isStateless, isNeedAppbar, isNeedBottomNavigationBar);
};
export var CreateScreenFileAndContent = function (screenName, screenFileName, isStateless, isNeedAppbar, isNeedBottomNavigationBar) {
    if (isStateless == true) {
        fs.writeFileSync("".concat(process.cwd(), "/").concat(ScreensFolder, "/").concat(screenFileName), StatelessScreenContent(screenName, screenFileName, isNeedAppbar, isNeedBottomNavigationBar));
    }
    else {
        fs.writeFileSync("".concat(process.cwd(), "/").concat(ScreensFolder, "/").concat(screenFileName), StatefullScreenContent(screenName, screenFileName, isNeedAppbar, isNeedBottomNavigationBar));
    }
};
