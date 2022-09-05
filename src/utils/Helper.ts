import { ErrorMessage, InfoMessage } from "../constants/Colors.js";

export const IsOneOfOptionsFunc = (option: string, options: string[]): boolean => {
	return options.indexOf(option) > -1;
}

const UsgaeForNameWidget = (type: string): void => {
	InfoMessage(`\nUsage: fcli ${type} "<name>"`);
}

export const IsWidgetNameExistFunc = (index: number, length: number, type: string): void => {
	if (index + 1 >= length) {
		ErrorMessage(`❌ ${type} name is required`);
		UsgaeForNameWidget(type);
		process.exit();
	}
}

export const GetWidgetFileNameFunc = (widgetName: string, isSceen: boolean = false): string => {
	let newWidgetName: string;
	newWidgetName = widgetName.toLocaleLowerCase();
	newWidgetName = newWidgetName.replace(/ /g, "_");
	newWidgetName = newWidgetName.replace(/-/g, "_");
	if (isSceen) {
		return `${newWidgetName}_screen.dart`;
	}
	return `${newWidgetName}.dart`;
}


export const GetWidgetNameFunc = (widgetName: string, isSceen: boolean = false): string => {
	let newWidgetName: string;

	newWidgetName = widgetName.replace(/-/g, " ");
	newWidgetName = toCapitalize(newWidgetName);
	newWidgetName = newWidgetName.replace(/ /g, "");
	if (isSceen) {
		return `${newWidgetName}Screen`;
	}
	return newWidgetName;
}

export const GetScreenName = (screenFileName: string): string => {
	let newScreenName: string;
	newScreenName = screenFileName.replace("_screen.dart", "");
	newScreenName = newScreenName.replace(/_/g, " ");
	newScreenName = toCapitalize(newScreenName);
	return newScreenName;
}

export const GetScreenRouteName = (screenFileName: string): string => {
	let newScreenName: string;
	newScreenName = screenFileName.replace("_screen.dart", "");
	newScreenName = newScreenName.replace(/_/g, "-");
	newScreenName = newScreenName.replace(".dart", "");
	return newScreenName;
}


export const toCapitalize = (str: string): string => {
	const arr = str.split(" ");

	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}

	const str2 = arr.join(" ");
	return str2;
}