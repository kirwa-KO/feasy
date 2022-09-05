import { ErrorMessage, InfoMessage } from "../constants/Colors.js";
export var IsOneOfOptionsFunc = function (option, options) {
    return options.indexOf(option) > -1;
};
var UsgaeForNameWidget = function (type) {
    InfoMessage("\nUsage: fcli ".concat(type, " \"<name>\""));
};
export var IsWidgetNameExistFunc = function (index, length, type) {
    if (index + 1 >= length) {
        ErrorMessage("\u274C ".concat(type, " name is required"));
        UsgaeForNameWidget(type);
        process.exit();
    }
};
export var GetWidgetFileNameFunc = function (widgetName, isSceen) {
    if (isSceen === void 0) { isSceen = false; }
    var newWidgetName;
    newWidgetName = widgetName.toLocaleLowerCase();
    newWidgetName = newWidgetName.replace(/ /g, "_");
    newWidgetName = newWidgetName.replace(/-/g, "_");
    if (isSceen) {
        return "".concat(newWidgetName, "_screen.dart");
    }
    return "".concat(newWidgetName, ".dart");
};
export var GetWidgetNameFunc = function (widgetName, isSceen) {
    if (isSceen === void 0) { isSceen = false; }
    var newWidgetName;
    newWidgetName = widgetName.replace(/-/g, " ");
    newWidgetName = toCapitalize(newWidgetName);
    newWidgetName = newWidgetName.replace(/ /g, "");
    if (isSceen) {
        return "".concat(newWidgetName, "Screen");
    }
    return newWidgetName;
};
export var GetScreenName = function (screenFileName) {
    var newScreenName;
    newScreenName = screenFileName.replace("_screen.dart", "");
    newScreenName = newScreenName.replace(/_/g, " ");
    newScreenName = toCapitalize(newScreenName);
    return newScreenName;
};
export var GetScreenRouteName = function (screenFileName) {
    var newScreenName;
    newScreenName = screenFileName.replace("_screen.dart", "");
    newScreenName = newScreenName.replace(/_/g, "-");
    newScreenName = newScreenName.replace(".dart", "");
    return newScreenName;
};
export var toCapitalize = function (str) {
    var arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    var str2 = arr.join(" ");
    return str2;
};
