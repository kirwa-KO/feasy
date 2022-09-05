import * as fs from "fs";
import { SuccessMessage } from "../constants/Colors.js";
import { WidgetsFolder } from "../constants/FoldersNames.js";
import { checkIfFolderExistInCurrentDirectory } from "./FsHelpers.js";
import { StatefullWidgetContent, StatelessWidgetContent } from "./WidgetsContent.js";

export const CreateWidget = (widgetName: string, screenFileName: string, isStateless: boolean): void => {
	if (checkIfFolderExistInCurrentDirectory(WidgetsFolder) == false) {
		fs.mkdirSync(`${process.cwd()}/${WidgetsFolder}`);
	}

	CreateWidgetFileAndContent(widgetName, screenFileName, isStateless);
}

export const CreateWidgetFileAndContent = (widgetName: string, screenFileName: string, isStateless: boolean): void => {
	if (isStateless == true) {
		fs.writeFileSync(`${process.cwd()}/${WidgetsFolder}/${screenFileName}`, StatelessWidgetContent(widgetName));
	}
	else {
		fs.writeFileSync(`${process.cwd()}/${WidgetsFolder}/${screenFileName}`, StatefullWidgetContent(widgetName,));
	}
	SuccessMessage("✅ Widget Created Successfully");
}