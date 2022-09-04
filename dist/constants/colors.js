var RESET_BOLD = "\u001b[22m";
var RESET_COLOR = "\x1b[0m";
var BOLD = "\u001b[1m";
var FG_GREEN = "\x1b[32m";
var FG_RED = "\x1b[31m";
var FG_Blue = "\x1b[34m";
var BOLD_FG_GREEN = "".concat(BOLD).concat(FG_GREEN);
var RESET_BOLD_FG_GREEN = "".concat(RESET_BOLD).concat(RESET_COLOR);
var BOLD_FG_RED = "".concat(BOLD).concat(FG_RED);
var RESET_BOLD_FG_RED = "".concat(RESET_BOLD).concat(RESET_COLOR);
var BOLD_FG_BLUE = "".concat(BOLD).concat(FG_Blue);
var RESET_BOLD_FG_BLUE = "".concat(RESET_BOLD).concat(RESET_COLOR);
export var ErrorMessage = function (message) {
    console.log("".concat(BOLD_FG_RED).concat(message).concat(RESET_BOLD_FG_RED));
};
export var InfoMessage = function (message) {
    console.log("".concat(BOLD_FG_BLUE).concat(message).concat(RESET_BOLD_FG_BLUE));
};
export var SuccessMessage = function (message) {
    console.log("".concat(BOLD_FG_GREEN).concat(message).concat(RESET_BOLD_FG_GREEN));
};
export var ReturnBoldMessage = function (message) {
    return ("".concat(BOLD).concat(message).concat(RESET_BOLD));
};
export var ReturnInfoMessage = function (message) {
    return ("".concat(BOLD_FG_BLUE).concat(message).concat(RESET_BOLD_FG_BLUE));
};
