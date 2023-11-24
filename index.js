import 'react-native-gesture-handler'
import './src/localization/i18n'
import { AppRegistry, LogBox } from 'react-native'
import { name as appName } from './app.json'
import { App } from './src/app'

const IGNORED_LOGS = ['Warning: Function components cannot be given refs']

LogBox.ignoreLogs(IGNORED_LOGS)

if (__DEV__) {
  const withoutIgnored =
    logger =>
    (...args) => {
      const output = args.join(' ')
      if (!IGNORED_LOGS.some(log => output.includes(log))) {
        logger(...args)
      }
    }

  console.log = withoutIgnored(console.log)
  console.info = withoutIgnored(console.info)
  console.warn = withoutIgnored(console.warn)
  console.error = withoutIgnored(console.error)
}

AppRegistry.registerComponent(appName, () => App)
