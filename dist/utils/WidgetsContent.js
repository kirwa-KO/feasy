export var StatefullWidgetContent = function (WidgetName) {
    var content = "import 'package:flutter/material.dart';\n\nclass ".concat(WidgetName, " extends StatefulWidget {\n  const ").concat(WidgetName, "({super.key});\n\n  @override\n  State<").concat(WidgetName, "> createState() => _").concat(WidgetName, "State();\n}\n\nclass _").concat(WidgetName, "State extends State<").concat(WidgetName, "> {\n  @override\n  Widget build(BuildContext context) {\n    return Container(child: );\n  }\n}\n");
    return content;
};
export var StatelessWidgetContent = function (WidgetName) {
    var content = "import 'package:flutter/material.dart';\n\nclass ".concat(WidgetName, " extends StatelessWidget {\n  const ").concat(WidgetName, "({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Container(child: );\n  }\n}\n");
    return content;
};
