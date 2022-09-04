
export const StatefullWidgetContent = (WidgetName: string): string => {
	const content = `import 'package:flutter/material.dart';

class ${WidgetName} extends StatefulWidget {
  const ${WidgetName}({super.key});

  @override
  State<${WidgetName}> createState() => _${WidgetName}State();
}

class _${WidgetName}State extends State<${WidgetName}> {
  @override
  Widget build(BuildContext context) {
    return Container(child: );
  }
}
`;
	return content;
};

export const StatelessWidgetContent = (WidgetName: string): string => {
	const content = `import 'package:flutter/material.dart';

class ${WidgetName} extends StatelessWidget {
  const ${WidgetName}({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(child: );
  }
}
`;
	return content;
};
