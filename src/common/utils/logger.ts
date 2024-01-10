/* eslint-disable consistent-return */
/* eslint-disable prefer-rest-params */

export const logger = {
  debug(...args: any[]) {
    const date = new Date().toLocaleTimeString()
    Array.prototype.unshift.call(args, `[${date}] ⚡⚡⚡ `)
    console.log(...args)
  },
  error(...args: any[]) {
    if (__DEV__) {
      console.error(...args)
    }
  },
  log(...args: any[]) {
    const date = new Date().toLocaleTimeString()
    Array.prototype.unshift.call(args, `[${date}]`)
    console.log(...args)
  },
  warn(...args: any[]) {
    console.warn(...args)
  },
  info(...args: any[]) {
    console.info(...args)
  },
  table(...args: any[]) {
    console.table(...args)
  },
  json(obj: any) {
    const date = new Date().toLocaleTimeString()
    console.log(`[${date}] JSON ⚡⚡⚡`, JSON.stringify(obj, null, 2))
  },
}
