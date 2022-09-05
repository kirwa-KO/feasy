### NAME
   **feasy** – command line for creating Stateful and Stateless widgets and screens in Flutter


### OPTIONS:

- `screen "screen name"`      Create Flutter Screen Widget by default screen is Stateless, you use s or --screen instead of screen

- `widget "widget name"`      Create Flutter Widget by default widget is Stateless, you use w or --widget instead of widget

- `stateful`                  Create Stateful Widget or Screen, you can use full or f instead of stateful

- `stateless`                 Create Stateless Widget or Screen, you can use less or l instead of stateless

- `appbar`                    Add AppBar to your screen, you can use a or --appbar instead of appbar

- `bottomnavigationbar`       Add Bottom Navigation Bar to your screen, b or --bottomnavigationbar instead of bottomnavigationbar

### NOTE:
- screens is created in `lib/screens` folder
- widgets is created in `lib/widgets` folder
- Btw: be sure to run feasy in your `flutter root directory`

### EXAMPLES
`The Command`
```bash
feasy screen "hello world" appbar bottomnavigationbar
```
- will create a screen named hello_world.dart in lib/screens folder with AppBar and BottomNavigationBar

`The Command`
```bash
feasy widget "category list" stateful
```

- will create a stateful widget named category_list.dart in lib/widgets folder