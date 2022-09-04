import { GetScreenName, GetScreenRouteName } from "./Helper.js";

const appBarContent = (isNeedAppbar: boolean, ScreenFileName: string): string => {
	if (isNeedAppbar == true) {
		return `
      appBar: AppBar(
        title: const Text("${GetScreenName(ScreenFileName)}"),
      ),`;
	} else {
		return "";
	}
}

const BottomNavigationBarContent = (isNeedBottomNavigationBar: boolean): string => {
	if (isNeedBottomNavigationBar == true) {
		return `
      bottomNavigationBar: BottomNavigationBar(
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home_outlined)),
          BottomNavigationBarItem(icon: Icon(Icons.shopping_cart_outlined)),
        ],
      ),`;
	} else {
		return "";
	}
}

export const StatefullScreenContent = (ScreenName: string, ScreenFileName: string, isNeedAppbar: boolean, isNeedBottomNavigationBar: boolean): string => {
	const content = `import 'package:flutter/material.dart';

class ${ScreenName} extends StatefulWidget {
  static const String routeName = "/${GetScreenRouteName(ScreenFileName)}";

  const ${ScreenName}({super.key});

  @override
  State<${ScreenName}> createState() => _${ScreenName}State();
}

class _${ScreenName}State extends State<${ScreenName}> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(${appBarContent(isNeedAppbar, ScreenFileName)}
      body: Container(child: ),${BottomNavigationBarContent(isNeedBottomNavigationBar)}
    );
  }
}
`;
	return content;
};

export const StatelessScreenContent = (ScreenName: string, ScreenFileName: string, isNeedAppbar: boolean, isNeedBottomNavigationBar: boolean): string => {
	const content = `import 'package:flutter/material.dart';

class ${ScreenName} extends StatelessWidget {
  static const String routeName = "/${GetScreenRouteName(ScreenFileName)}";

  const ${ScreenName}({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(${appBarContent(isNeedAppbar, ScreenFileName)}
      body: Container(child: ),${BottomNavigationBarContent(isNeedBottomNavigationBar)}
    );
  }
}
`;
	return content;
};
