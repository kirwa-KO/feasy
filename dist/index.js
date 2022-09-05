#!/usr/bin/env node
import { ErrorMessage, InfoMessage } from "./constants/Colors.js";
import { ScreenOptions, WidgetOptions, StatefulOptions, StatelessOptions, NeedAppbarOptions, NeedBottomNavigationBarOptions, HelpOptions } from "./constants/Optins.js";
import { CreateScreen } from "./utils/CreateScreensHelper.js";
import { CreateWidget } from "./utils/CreateWidgetsHelper.js";
import { checkIfFolderExistInCurrentDirectory } from "./utils/FsHelpers.js";
import { IsOneOfOptionsFunc, IsWidgetNameExistFunc, GetWidgetFileNameFunc, GetWidgetNameFunc } from "./utils/Helper.js";
import { help } from "./utils/manual.js";
var isScreen = false;
var isWidget = false;
var isStateless = true;
var widgetName = "MyWidget";
var widgetFileName = "MyWidget";
var isNeedAppbar = false;
var isNeedBottomNavigationBar = false;
if (process.argv.length <= 2) {
    help();
    process.exit(0);
}
var option;
for (var i = 2; i < process.argv.length; i++) {
    option = process.argv[i];
    if (IsOneOfOptionsFunc(option, ScreenOptions)) {
        IsWidgetNameExistFunc(i, process.argv.length, ScreenOptions[0]);
        isScreen = true;
        isWidget = false;
        widgetFileName = GetWidgetFileNameFunc(process.argv[i + 1]);
        widgetName = GetWidgetNameFunc(process.argv[i + 1]);
        i++;
    }
    else if (IsOneOfOptionsFunc(option, WidgetOptions)) {
        IsWidgetNameExistFunc(i, process.argv.length, WidgetOptions[0]);
        isScreen = false;
        isWidget = true;
        widgetFileName = GetWidgetFileNameFunc(process.argv[i + 1]);
        widgetName = GetWidgetNameFunc(process.argv[i + 1]);
        i++;
    }
    else if (IsOneOfOptionsFunc(option, StatefulOptions)) {
        isStateless = false;
    }
    else if (IsOneOfOptionsFunc(option, StatelessOptions)) {
        isStateless = true;
    }
    else if (IsOneOfOptionsFunc(option, NeedAppbarOptions)) {
        isNeedAppbar = true;
    }
    else if (IsOneOfOptionsFunc(option, NeedBottomNavigationBarOptions)) {
        isNeedBottomNavigationBar = true;
    }
    else if (IsOneOfOptionsFunc(option, HelpOptions)) {
        help();
        process.exit(0);
    }
    else {
        ErrorMessage("❌ Invalid Option : " + option + "\n");
        help();
        process.exit(1);
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
else if (isWidget === true) {
    CreateWidget(widgetName, widgetFileName, isStateless);
}
else {
    ErrorMessage("❌ Invalid Option\n");
    help();
    process.exit(1);
}
