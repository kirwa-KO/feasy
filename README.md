<p align="center">
  <img src="https://github.com/kirwa-KO/feasy/blob/main/readme/logo.svg" />
</p>

## Feasy
Feasy is a humble CLI, whose purpose is to assist Flutter developers in creating widgets and screens without the boilerplate. It can easily generate templates for Flutter Stateful and Stateless widgets and screens

  [![NPM Version][npm-version-image]][npm-url]
  [![NPM Install Size][npm-install-size-image]][npm-install-size-url]
  [![NPM Downloads][npm-downloads-image]][npm-downloads-url]

## Features
🚀 **Extremely easy to pick up** and use in Flutter projects.<br/>
🐙 **Flexible** - feasy create widget in `lib/wigdets` folder and screens in `lib/screens` folder.<br/>
⚙️ **Configurable** -  feasy create stateful and stateless widget and screens with just sample options.<br/>

## Installation

```bash
npm install -g feasy
# Or:
yarn global add feasy
```

Alterntively, use:
```bash
npx feasy [...]
# e.g.
npx feasy screen "hello world"
```
using `npx`, the latest version is always used.

Feasy consists of two commands: `screen` (or `s`, `--screen`) and `widget` (or `w`, `--widget`):

### Screen

```bash
feasy screen "name" [options]
```
This command generates a new Flutter screen, based on the `name` and `options` passed to it

`feasy s` is an alias of `feasy --screen` is an alias of `feasy screen`.

##### Screen Options:
`stateful` (or `f` , `full`) Create Stateful screen
```bash
feasy screen "hello world" stateful # Create Stateful screen in lib/screens with routename
```
`stateless` (or `l` , `less`) Create Stateless screen
```bash
feasy screen "hello world" stateless # Create Stateless screen in lib/screens with routename
```

`appbar` (or `a` , `--appbar`) Add App Bar to your screen
```bash
feasy screen "hello world" stateless appbar # Create Stateless screen in lib/screens with routename and App Bar
```

`bottomnavigationbar` (or `b` , `--bottomnavigationbar `) Add Bottom Navigation Bar to your screen
```bash
feasy screen "hello world" stateless bottomnavigationbar # Create Stateless screen in lib/screens with routename and Bottom Navigation Bar
```
PS: you can combine `appbar` and `bottomnavigationbar` options

### Widget

```bash
feasy widget "name" [options]
```
This command generates a new Flutter widget, based on the `name` and `options` passed to it

`feasy w` is an alias of `feasy --widget` is an alias of `feasy widget`.

##### Widget Options:
`stateful` (or `f` , `full`) Create Stateful widget
```bash
feasy widget "hello world" stateful # Create Stateful widget in lib/widgets
```
`stateless` (or `l` , `less`) Create Stateless widget
```bash
feasy widget "hello world" stateless # Create Stateless widget in lib/widgets
```

### NOTE:
- screens is created in `lib/screens` folder
- widgets is created in `lib/widgets` folder
- Be sure to run feasy in your `flutter root directory`

## License
discord-clone is licensed under MIT license. View license. [LICENSE](https://github.com/kirwa-KO/feasy/blob/main/LICENSE)

## Support
#### This app costs me time to make and maintain every time.
[I am very 😀 about every coffee!]

<a href="https://www.buymeacoffee.com/imranbaali" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="41" width="174"></a>

[npm-downloads-image]: https://badgen.net/npm/dm/feasy
[npm-downloads-url]: https://npmcharts.com/compare/feasy?minimal=true
[npm-install-size-image]: https://badgen.net/packagephobia/install/feasy
[npm-install-size-url]: https://packagephobia.com/result?p=feasy
[npm-url]: https://www.npmjs.com/package/feasy
[npm-version-image]: https://badgen.net/npm/v/feasy