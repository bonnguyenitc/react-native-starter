# React Native Base Project

<p align="center"><img src="https://raw.githubusercontent.com/bonnguyenitc/react-native-starter/main/dist/demo.gif" alt="demo"></p>

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

| Package                                                                        | Version     |
| ------------------------------------------------------------------------------ | ----------- |
| [React navigation](https://github.com/Shopify/restyle)                         | v6          |
| [@shopify/restyle](https://github.com/Shopify/restyle)                         | ^2.1.0      |
| [axios](https://axios-http.com/)                                               | ^0.27.2     |
| [i18next](https://www.i18next.com/)                                            | ^21.8.11    |
| [react-hook-form](https://react-hook-form.com/)                                | ^7.33.0     |
| [react-native](https://reactnative.dev/)                                       | 0.69.1      |
| [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash)  | ^4.4.0      |
| [react-native-config](https://github.com/luggit/react-native-config)           | ^1.4.6      |
| [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv)             | ^2.4.2      |
| [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) | ^2.9.1      |
| [yup](https://github.com/jquense/yup)                                          | ^0.32.11    |
| [zustand](https://github.com/pmndrs/zustand)                                   | ^4.0.0-rc.1 |

## Quick Start

#### Require

- XCode >= 13.2.1, Android Studio, JDK 11
- NodeJS v16.17.0, Yarn v1.22.19
- Code editor: VScode, ext (Auto Rename Tag, Code Spell Checker, Color Highlight, Error Lens, ES7+ React/Redux/React-Native snippets, ESLint, Import Cost, Prettier - Code formatter, Rainbow Brackets)
- Setting up the development environment: [React Native](https://reactnative.dev/docs/environment-setup)

#### Run the CLI:

##

```bash
# pull source
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
