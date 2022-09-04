import { ReturnBoldMessage, ReturnInfoMessage } from "../constants/Colors.js";

export const help = () => {
	console.log (
		`${ReturnInfoMessage("NAME")}
    ${ReturnBoldMessage("feasy")} – command line for creating Stateful and Stateless widgets and screens

${ReturnInfoMessage("OPTIONS")}
    ${ReturnBoldMessage(`screen "screen name"`)}      Create Flutter Screen Widget by default screen is Stateless, you use s or --screen instead of screen
   
    ${ReturnBoldMessage(`widget "widget name"`)}      Create Flutter Widget by default widget is Stateless, you use w or --widget instead of widget
   
    ${ReturnBoldMessage(`stateful`)}                  Create Stateful Widget or Screen, you can use full or f instead of stateful
   
    ${ReturnBoldMessage(`stateless`)}                 Create Stateless Widget or Screen, you can use less or l instead of stateless
   
    ${ReturnBoldMessage(`appbar`)}                    Add AppBar to your screen, you can use a or --appbar instead of appbar
   
    ${ReturnBoldMessage(`bottomnavigationbar`)}       Add Bottom Navigation Bar to your screen, b or --bottomnavigationbar instead of bottomnavigationbar
   
${ReturnInfoMessage("NOTE")}
    screens is created in lib/screens folder
    widgets is created in lib/widgets folder
    Btw: be sure to run feasy in your flutter root directory
   
${ReturnInfoMessage("EXAMPLES")}
    ${ReturnBoldMessage("The command:")}
        feasy screen "hello world" appbar bottomnavigationbar
        -> will create a screen named hello_world.dart in lib/screens folder with AppBar and BottomNavigationBar

    ${ReturnBoldMessage("The command:")}
        feasy widget "category list" stateful
        -> will create a stateful widget named category_list.dart in lib/widgets folder
   `
	);
}