# React Native Starter (RNS) - React Native boilerplate full feature to start make your app

<p align="center"><img src="https://raw.githubusercontent.com/bonnguyenitc/react-native-starter/main/dist/demo.gif" alt="logo"></p>

## Tech Stack

- React Native
- React Navigation 6
- Zustand
- Typescript
- Local storage with MMKV
- Axios
- Flipper
- Multiple evironment devepment
- Modal, popup
- Theme with @shopify/restyle
- Form validattion with react-hook-form, yup
- Multi language with react-i18next, i18next
- Splash
- Error Boundary
- Font setting
- Format source with eslint, prettier
- Animation with moti, reanimated
- And more!

## Quick Start

Run the CLI:

```bash
# pull source
git clone https://github.com/bonnguyenitc/react-native-starter.git

# install package:
yarn

# run application android development
yarn android:dev
yarn android:stg
yarn android:prod

# run application android development
yarn ios:dev
yarn ios:stg
yarn ios:prod

# build release with cmd
./deploy.sh

And more in package.json. Check it!
```

# Struture app

```
├── __mocks__
├── assets
│   ├── fonts
│   ├── images
│   └── jsons
├── components
│   ├── elements
│   │   ├── Box
│   │   ├── Button
│   │   ├── Center
│   │   ├── Col
│   │   ├── Row
│   │   ├── Space
│   │   ├── Spinner
│   │   ├── Switch
│   │   ├── Text
│   │   └── TextInput
│   ├── form
│   │   └── InputField
│   ├── layout
│   └── modals
│       └── Confirm
├── config
├── features
│   ├── auth
│   │   ├── api
│   │   ├── assets
│   │   ├── components
│   │   ├── hooks
│   │   ├── routes
│   │   ├── screens
│   │   ├── stores
│   │   ├── types
│   │   └── utils
│   ├── error
│   │   └── screens
│   └── home
│       ├── components
│       ├── routes
│       └── screens
├── global
├── hooks
│   └── __tests__
├── lib
├── localization
│   ├── en
│   └── vi
├── provider
├── routes
├── stores
│   └── __tests__
├── test
├── themes
├── types
└── utils
```

# Welcome all PR
