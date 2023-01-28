/* eslint-disable no-restricted-syntax */

import { CallbackFunction } from '../types'

export class EventRegister {
  static listeners: {
    count: number
    refs: Map<string, CallbackFunction<any, void>>
  } = {
    count: 0,
    refs: new Map(),
  }

  static addEventListener(eventName: string, callback: CallbackFunction<any, void>) {
    if (!eventName) return false
    EventRegister.listeners.refs.set(eventName, callback)
    return true
  }

  static removeEventListener(eventName: string) {
    if (!eventName) return false
    return EventRegister.listeners.refs.delete(eventName)
  }

  static removeAllListeners() {
    EventRegister.listeners.refs.clear()
  }

  static emitEvent(eventName: string, data?: any) {
    if (EventRegister.listeners.refs.has(eventName)) {
      const callback = EventRegister.listeners.refs.get(eventName)
      // eslint-disable-next-line no-unused-expressions
      callback && callback(data)
    }
  }

  static on(eventName: string, callback: CallbackFunction<any, void>) {
    return EventRegister.addEventListener(eventName, callback)
  }

  static off(eventName: string) {
    return EventRegister.removeEventListener(eventName)
  }

  static offAll() {
    return EventRegister.removeAllListeners()
  }

  static emit(eventName: string, data?: any) {
    EventRegister.emitEvent(eventName, data)
  }
}

export const EVENTS = {
  EVENT_LOGOUT: '@EVENT_LOGOUT',
}
