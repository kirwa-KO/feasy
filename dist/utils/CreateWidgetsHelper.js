import * as fs from "fs";
import { SuccessMessage } from "../constants/Colors.js";
import { WidgetsFolder } from "../constants/FoldersNames.js";
import { checkIfFolderExistInCurrentDirectory } from "./FsHelpers.js";
import { StatefullWidgetContent, StatelessWidgetContent } from "./WidgetsContent.js";
export var CreateWidget = function (widgetName, screenFileName, isStateless) {
    if (checkIfFolderExistInCurrentDirectory(WidgetsFolder) == false) {
        fs.mkdirSync("".concat(process.cwd(), "/").concat(WidgetsFolder));
    }
    CreateWidgetFileAndContent(widgetName, screenFileName, isStateless);
};
export var CreateWidgetFileAndContent = function (widgetName, screenFileName, isStateless) {
    if (isStateless == true) {
        fs.writeFileSync("".concat(process.cwd(), "/").concat(WidgetsFolder, "/").concat(screenFileName), StatelessWidgetContent(widgetName));
    }
    else {
        fs.writeFileSync("".concat(process.cwd(), "/").concat(WidgetsFolder, "/").concat(screenFileName), StatefullWidgetContent(widgetName));
    }
    SuccessMessage("✅ Widget Created Successfully");
};
