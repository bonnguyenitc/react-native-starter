# React Native Template 2023

<p align="center"><img src="https://raw.githubusercontent.com/bonnguyenitc/react-native-starter/main/dist/demo.gif" alt="demo"></p>

## With Fue Cli [Source](https://github.com/bonnguyenitc/fue)

### Create project

`npx fue-cli new`

### Generate code with fue

#### In root

1. Generate widget
   `fue g widget widget-name --react-native`
2. Generate modal
   `fue g modal modal-name --react-native`
3. Generate module
   `fue g module module-name --react-native`
4. Generate form
   `fue g form form-name --react-native`
5. Generate in form a specify dir
   `fue g form a/b/c/form-name --react-native`

#### In module

1. Generate widget
   `fue g widget widget-name --react-native --module=auth`
2. Generate modal
   `fue g modal modal-name --react-native --module=auth`
3. Generate module
   `fue g module module-name --react-native --module=auth`
4. Generate form
   `fue g form form-name --react-native --module=auth`
5. Generate screen
   `fue g screen screen-name --react-native --module=auth`
6. Generate in form a specify dir
   `fue g form a/b/c/form-name --react-native`

## Features

- Navigation v6
- Theme by restyle
- Splash screen
- State management
- Multi env: dev, stg, prd
- Multi language
- Validate form
- Integrate api
- Git Hooks with Husky

## Tech

##

| Package                                                                        | Version  |
| ------------------------------------------------------------------------------ | -------- |
| [React navigation](https://github.com/Shopify/restyle)                         | v6       |
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

#### Require

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

## Rules and Conventions

- Airbnb JavaScript Style Guide [LINK](https://github.com/airbnb/javascript)
- Naming
  - Folder, File : kabab-case (name-file.tsx)
  - Hook file, naming variables, functions, classes, interfaces, types, enums: camelCase (useHook)

## Structure folder app

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
│   └── shared
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

## Folder for a feature

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

## License

MIT
