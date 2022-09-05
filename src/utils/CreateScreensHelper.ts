import * as fs from "fs";
import { SuccessMessage } from "../constants/Colors.js";
import { ScreensFolder } from "../constants/FoldersNames.js";
import { checkIfFolderExistInCurrentDirectory } from "./FsHelpers.js";
import { StatefullScreenContent, StatelessScreenContent } from "./ScreensContent.js";

export const CreateScreen = (screenName: string, screenFileName: string, isStateless: boolean, isNeedAppbar: boolean, isNeedBottomNavigationBar: boolean): void => {
	if (checkIfFolderExistInCurrentDirectory(ScreensFolder) == false) {
		fs.mkdirSync(`${process.cwd()}/${ScreensFolder}`);
	}

	CreateScreenFileAndContent(screenName, screenFileName, isStateless, isNeedAppbar, isNeedBottomNavigationBar);
}

export const CreateScreenFileAndContent = (screenName: string, screenFileName: string, isStateless: boolean, isNeedAppbar: boolean, isNeedBottomNavigationBar: boolean): void => {
	if (isStateless == true) {
		fs.writeFileSync(`${process.cwd()}/${ScreensFolder}/${screenFileName}`, StatelessScreenContent(screenName, screenFileName, isNeedAppbar, isNeedBottomNavigationBar));
	}
	else {
		fs.writeFileSync(`${process.cwd()}/${ScreensFolder}/${screenFileName}`, StatefullScreenContent(screenName, screenFileName, isNeedAppbar, isNeedBottomNavigationBar));
	}
	SuccessMessage("✅ Screen Created Successfully");
}