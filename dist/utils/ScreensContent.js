import { GetScreenName, GetScreenRouteName } from "./Helper.js";
var appBarContent = function (isNeedAppbar, ScreenFileName) {
    if (isNeedAppbar == true) {
        return "\n      appBar: AppBar(\n        title: const Text(\"".concat(GetScreenName(ScreenFileName), "\"),\n      ),");
    }
    else {
        return "";
    }
};
var BottomNavigationBarContent = function (isNeedBottomNavigationBar) {
    if (isNeedBottomNavigationBar == true) {
        return "\n      bottomNavigationBar: BottomNavigationBar(\n        items: const [\n          BottomNavigationBarItem(icon: Icon(Icons.home_outlined)),\n          BottomNavigationBarItem(icon: Icon(Icons.shopping_cart_outlined)),\n        ],\n      ),";
    }
    else {
        return "";
    }
};
export var StatefullScreenContent = function (ScreenName, ScreenFileName, isNeedAppbar, isNeedBottomNavigationBar) {
    var content = "import 'package:flutter/material.dart';\n\nclass ".concat(ScreenName, " extends StatefulWidget {\n  static const String routeName = \"/").concat(GetScreenRouteName(ScreenFileName), "\";\n\n  const ").concat(ScreenName, "({super.key});\n\n  @override\n  State<").concat(ScreenName, "> createState() => _").concat(ScreenName, "State();\n}\n\nclass _").concat(ScreenName, "State extends State<").concat(ScreenName, "> {\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(").concat(appBarContent(isNeedAppbar, ScreenFileName), "\n      body: Container(child: ),").concat(BottomNavigationBarContent(isNeedBottomNavigationBar), "\n    );\n  }\n}\n");
    return content;
};
export var StatelessScreenContent = function (ScreenName, ScreenFileName, isNeedAppbar, isNeedBottomNavigationBar) {
    var content = "import 'package:flutter/material.dart';\n\nclass ".concat(ScreenName, " extends StatelessWidget {\n  static const String routeName = \"/").concat(GetScreenRouteName(ScreenFileName), "\";\n\n  const ").concat(ScreenName, "({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(").concat(appBarContent(isNeedAppbar, ScreenFileName), "\n      body: Container(child: ),").concat(BottomNavigationBarContent(isNeedBottomNavigationBar), "\n    );\n  }\n}\n");
    return content;
};
