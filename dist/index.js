#!/usr/bin/env node
import { ErrorMessage, InfoMessage } from "./constants/Colors.js";
import { ScreenOptions, WidgetOptions, StatefulOptions, StatelessOptions, NeedAppbarOptions, NeedBottomNavigationBarOptions, HelpOptions } from "./constants/Optins.js";
import { CreateScreen } from "./utils/CreateScreensHelper.js";
import { CreateWidget } from "./utils/CreateWidgetsHelper.js";
import { checkIfFolderExistInCurrentDirectory } from "./utils/FsHelpers.js";
import { IsOneOfOptionsFunc, IsWidgetNameExistFunc, GetWidgetFileNameFunc, GetWidgetNameFunc } from "./utils/Helper.js";
import { help } from "./utils/manual.js";
var isScreen = false;
var isWidget = true;
var isStateless = true;
var widgetName = "MyWidget";
var widgetFileName = "MyWidget";
var isNeedAppbar = false;
var isNeedBottomNavigationBar = false;
for (var i = 2; i < process.argv.length; i++) {
    if (IsOneOfOptionsFunc(process.argv[i], ScreenOptions)) {
        IsWidgetNameExistFunc(i, process.argv.length, ScreenOptions[0]);
        isScreen = true;
        isWidget = false;
        widgetFileName = GetWidgetFileNameFunc(process.argv[i + 1]);
        widgetName = GetWidgetNameFunc(process.argv[i + 1]);
        i++;
    }
    if (IsOneOfOptionsFunc(process.argv[i], WidgetOptions)) {
        IsWidgetNameExistFunc(i, process.argv.length, WidgetOptions[0]);
        isScreen = false;
        isWidget = true;
        widgetFileName = GetWidgetFileNameFunc(process.argv[i + 1]);
        widgetName = GetWidgetNameFunc(process.argv[i + 1]);
        i++;
    }
    if (IsOneOfOptionsFunc(process.argv[i], StatefulOptions)) {
        isStateless = false;
    }
    if (IsOneOfOptionsFunc(process.argv[i], StatelessOptions)) {
        isStateless = true;
    }
    if (IsOneOfOptionsFunc(process.argv[i], NeedAppbarOptions)) {
        isNeedAppbar = true;
    }
    if (IsOneOfOptionsFunc(process.argv[i], NeedBottomNavigationBarOptions)) {
        isNeedBottomNavigationBar = true;
    }
    if (IsOneOfOptionsFunc(process.argv[i], HelpOptions)) {
        help();
        process.exit(0);
    }
}
if (checkIfFolderExistInCurrentDirectory("lib") == false) {
    ErrorMessage("❌ lib Folder Not Found");
    InfoMessage("\n Please run this command in flutter project directory and make sure you have lib folder");
    process.exit();
}
if (isScreen === true) {
    CreateScreen(widgetName, widgetFileName, isStateless, isNeedAppbar, isNeedBottomNavigationBar);
}
else {
    console.log("widget");
    CreateWidget(widgetName, widgetFileName, isStateless);
}
