# React Native Template Starter

[![Demo](./dist/demo.gif)](https://github-production-user-asset-6210df.s3.amazonaws.com/29059779/295525856-20ef36fa-e946-448b-805d-8c95ea5e33c3.mp4)

# Document table of contents

### [✅ 01 - How to change app logo](https://github.com/bonnguyenitc/react-native-starter/blob/main/docs/01-how-to-change-app-logo.md)

### [✅ 02 - How to change splash screen](https://github.com/bonnguyenitc/react-native-starter/blob/main/docs/02-how-to-change-splash-screen.md)

### [✅ 03 - How to keep code changed from node_modules](https://github.com/bonnguyenitc/react-native-starter/blob/main/docs/03-how-to-keep-code-changed-from-node-modules.md)

## With Fue Cli [Source](https://github.com/bonnguyenitc/fue)

### Create project with fue

`npx fue-cli new`

### Generate code with fue

#### In root

1. Generate widget (default dir: src/components/widgets)
   `fue g widget widget-name --reactnative`
2. Generate modal (default dir: src/components/modals)
   `fue g modal modal-name --reactnative`
3. Generate module (default dir: src/modules)
   `fue g module module-name --reactnative`
4. Generate form (default dir: src/components/forms)
   `fue g form form-name --reactnative`
5. Generate in form a specify dir
   `fue g form a/b/c/form-name --reactnative`

#### In module

1. Generate widget
   `fue g widget widget-name --reactnative --module=auth`
2. Generate modal
   `fue g modal modal-name --reactnative --module=auth`
3. Generate module
   `fue g module module-name --reactnative --module=auth`
4. Generate form
   `fue g form form-name --reactnative --module=auth`
5. Generate screen
   `fue g screen screen-name --reactnative --module=auth`
6. Generate in form a specify dir
   `fue g form a/b/c/form-name --reactnative`

## Features and Roadmap

- ✅ Navigation v6
- ✅ Theme by restyle
- ✅ Splash screen
- ✅ State management
- ✅ Multi env: dev, stg, prd
- ✅ Multi language
- ✅ Validate form
- ✅ Integrate api
- ✅ Git Hooks with Husky

## Dependencies and Libraries

##

| Package                                                                        | Version  |
| ------------------------------------------------------------------------------ | -------- |
| [React navigation](https://reactnavigation.org)                                | v6       |
| [@shopify/restyle](https://github.com/Shopify/restyle)                         | ^2.1.0   |
| [axios](https://axios-http.com/)                                               | ^0.27.2  |
| [i18next](https://www.i18next.com/)                                            | ^21.8.11 |
| [react-hook-form](https://react-hook-form.com/)                                | ^7.33.0  |
| [react-native](https://reactnative.dev/)                                       | 0.72.5   |
| [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash)  | ^5.0.3   |
| [react-native-config](https://github.com/luggit/react-native-config)           | ^1.5.1   |
| [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv)             | ^2.10.2  |
| [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) | ^3.5.4   |
| [yup](https://github.com/jquense/yup)                                          | ^0.32.11 |
| [zustand](https://github.com/pmndrs/zustand)                                   | ^4.4.2   |

## Quick Start

#### Require environment:

- XCode >= 13.2.1, Android Studio, JDK 11
- NodeJS v16.17.0, Yarn v1.22.19
- Code editor: VScode, ext (Auto Rename Tag, Code Spell Checker, Color Highlight, Error Lens, ES7+ React/Redux/React-Native snippets, ESLint, Import Cost, Prettier - Code formatter, Rainbow Brackets)
- Setting up the development environment: [React Native](https://reactnative.dev/docs/environment-setup)

#### Run the CLI:

##

```bash
# pull source from cli
npx fue-cli new

# pull source from git
git clone https://github.com/bonnguyenitc/react-native-starter.git

# install:
yarn

# run application android development
yarn android:dev
yarn android:stg
yarn android:prod

# run application iOS development
yarn ios:dev
yarn ios:stg
yarn ios:prod

# build release with cmd
./deploy.sh

And more in package.json. Check it!
```

## Rules and Conventions for development

- Airbnb JavaScript Style Guide [LINK](https://github.com/airbnb/javascript)
- Naming
  - Folder, File : kabab-case (name-file.tsx)
  - Hook file, naming variables, functions, classes, interfaces, types, enums: camelCase (useHook)

## Structure of the project

##

```
├── Gemfile
├── README.md
├── __mocks__
├── __tests__
├── android
├── app.json
├── assets
├── babel.config.js
├── bin
├── index.js
├── ios
├── jest
├── jest.config.js
├── metro.config.js
├── package.json
├── patches
├── react-native.config.js
├── scripts
├── src
│   ├── app.tsx
│   ├── assets
│   │   ├── fonts
│   │   ├── images
│   │   ├── index.ts
│   │   └── jsons
│   ├── components
│   │   ├── form
│   │   ├── modals
│   │   └── widgets
│   │       ├── align
│   │       ├── app-bar
│   │       ├── box
│   │       ├── button
│   │       ├── card
│   │       ├── center
│   │       ├── col
│   │       ├── if
│   │       ├── image
│   │       ├── index.ts
│   │       ├── positioned
│   │       ├── row
│   │       ├── screen
│   │       ├── space
│   │       ├── spinner
│   │       ├── stack
│   │       ├── switch
│   │       ├── text
│   │       ├── text-button
│   │       ├── text-input
│   │       ├── touchable
│   │       └── wrap
│   ├── localization
│   ├── modules
│   │   ├── auth
│   │   │   ├── api
│   │   │   ├── assets
│   │   │   ├── components
│   │   │   ├── hooks
│   │   │   ├── index.ts
│   │   │   ├── routes
│   │   │   ├── screens
│   │   │   ├── stores
│   │   │   ├── types
│   │   │   └── utils
│   │   ├── error
│   │   │   ├── components
│   │   │   └── screens
│   │   └── home
│   │       ├── components
│   │       ├── routes
│   │       └── screens
│   ├── provider
│   ├── routes
│   └── common
│       ├── config
│       ├── constants
│       ├── hooks
│       ├── libs
│       ├── stores
│       ├── themes
│       ├── types
│       └── utils
├── tsconfig.json
├── tsconfig.paths.json
├── types
│   └── declarations.d.ts
├── yarn-error.log
└── yarn.lock
```

## Folder structure of a module

##

```
├── auth
    ├── api
    ├── assets
    ├── components
    ├── hooks
    ├── routes
    ├── screens
    ├── stores
    ├── types
    └── utils
```

## Welcome contributors from this project!!!
